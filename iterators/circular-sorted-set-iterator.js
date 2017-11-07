const moment = require('moment-timezone');
const RedisClient = require('sweetwork-redis-client');

let cli;

// Redis-based implementation of a Circular Linked List based on the MDN
// documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators
// although this has a "sorted set" flavor

class CircularSortedSetIterator {
  /**
     * constructor - watch out, this iterator is redis-based meaning all values
     * are stored as string
     *
     * @param  {string} sortedSetKey
     * @return {object} CircularSortedSetIterator instance
     */
  constructor(sortedSetKey, host = null, port = null, db = null) {
    if (sortedSetKey === undefined) throw new Error('Required sortedSetKey');
    this.key = sortedSetKey;
    cli = new RedisClient(host, port, db);
  }

  /**
     * next - This iterator is implementing a circular list pattern (with a few ammends).
     * You cannot decide to restart the iterator by passing arguments into the next() method.
     * The consumer has no power over how the lists rotates as this is implemented in the Iterator class
     *
     * A special added flavor to this class: an item is not automatically disposed. Unlike the iterator pattern,
     * the consumer has to "dispose" an item. That way, multiple consumers can use the same ressource
     * without having a blocking behavior.
     *
     * @return {object} has a key and a value
     */
  async next(callback) {
    const unixNow = moment().unix();
    const members = await cli.zrangebyscore({
      key: this.key,
      withscores: false,
      min: 0,
      max: unixNow,
    });
    if (members.length === 0) return callback({ done: true });
    const [key, nextKey] = members;
    const value = await cli.hgetall({ key });
    if (value === null) return callback({ done: true });
    return callback({ value, key, done: !nextKey });
    // zrange of the key between 0 and moment().unix()
    // if length === 0 return { done: true }
    // if length > 0 do hgetall(members[0]) and return { value: hash, done: false }
  }

  /**
     * hasNext - returns a simple boolean so the consumer know if there are
     * available items in the circular list
     *
     * @return {boolean}
     */
  async hasNext(callback) {
    const unixNow = moment().unix();
    // zcount of the key between 0 and unixNow
    const count = await cli.zcount({
      key: this.key,
      withscores: false,
      min: 0,
      max: unixNow,
    });
    if (count === 0) callback(false);
    else callback(true);
  }

  /**
     * dispose - when using the next() method, you get a key of type string and
     * a value of type mixed (any type). the idea here is to let multiple consumers
     * use a ressource, and having them dispose it without blocking each other
     * the key you get will be used here to dispose the ressource, please DO dispose
     * it or you will block the queue !
     *
     * @return {undefined}
     */
  async dispose(pair, callback) {
    const that = this;
    try {
      if (pair.ts !== undefined) {
        await cli.zadd({ key: this.key, scomembers: [pair.ts, pair.key] });
        callback(null);
        return;
      }
      const members = await cli.zrevrangebyscore({
        key: that.key,
        withscores: true,
      });
      // .then(members => {
      let highestScore;
      if (members.length > 2) highestScore = parseInt(members[1], 10);
      else {
        // over 2 because this returns pairs of 'member:timestamp' and if there is more than 1 element in this set, it means the the list of members is over 2
        highestScore = moment()
          .add(1, 'minute')
          .unix();
      }
      // zadd it at the location of the latest one +1
      await cli.zadd({
        key: that.key,
        scomembers: [highestScore + 1, pair.key],
      });
      callback(null);
    } catch (e) {
      callback(e);
    }
  }
}

module.exports = CircularSortedSetIterator;
