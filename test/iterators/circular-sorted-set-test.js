/* eslint-disable prefer-arrow-callback, no-underscore-dangle */
'use strict';
const expect = require('chai').expect;
const moment = require('moment-timezone');

const RedisClient = require('sweetwork-redis-client');
const cli = new RedisClient(null, null, 1); // 1 is the test DB
const Iterator = require('../../iterators/circular-sorted-set-iterator');

describe('Handle a sorted set with 0 or 1 value', function () {
    const key = 'my-favorite-road-trip';
    const addedItemKey = 'my-favorite-road-trip:France';
    const addedItemValue = { city: 'Paris', rating: '5/5' };

    it('should throw when attempting to instantiate an iterator without argument', function (done) {
        let i;
        function fn() {
            i = new Iterator();
        }
        expect(fn).to.throw(Error);
        expect(i).to.equal(undefined);
        done();
    });

    it('should create a iterator with two methods', function (done) {
        let i;
        function fn() {
            i = new Iterator(key);
        }
        expect(fn).not.to.throw(Error);
        expect(i).to.be.instanceof(Iterator);
        expect(Iterator).to.respondTo('next');
        expect(Iterator).to.respondTo('hasNext');
        done();
    });

    it('should have NO available item (1.1)', function (done) {
        const i = new Iterator(key);
        i.next(result => {
            expect(result).to.be.deep.equal({ done: true });
            done();
        });
    });

    it('should have NO available item (1.2)', function (done) {
        const i = new Iterator(key);
        i.hasNext(result => {
            expect(result).to.equal(false);
            done();
        });
    });

    it('should push an item successfully', function (done) {
        const unixLater = moment()
            .add(10, 'seconds')
            .unix(); // setting this item in the future will make it NOT available
        cli.zadd({ key, scomembers: [unixLater, addedItemKey] }).then(() => {
            done();
        });
    });

    it('should have an item (in the list, but non available)', function (done) {
        cli.zcount({ key, withscores: false }).then(count => {
            expect(count).to.equal(1);
            done();
        });
    });

    it('should have NO available item (2.1)', function (done) {
        const i = new Iterator(key);
        i.hasNext(result => {
            expect(result).to.equal(false);
            done();
        });
    });

    it('should have NO available item (2.2)', function (done) {
        const i = new Iterator(key);
        i.next(result => {
            expect(result).to.be.deep.equal({ done: true });
            done();
        });
    });

    it('should make an item available', function (done) {
        const unixEarlier = moment()
            .subtract(30, 'seconds')
            .unix(); // setting this item in the past will make it available
        cli.zadd({ key, scomembers: [unixEarlier, addedItemKey] }).then(() => {
            cli.hmset({ key: addedItemKey, hash: addedItemValue }).then(result => {
                done();
            });
        });
    });

    it('should have an available item (3.1)', function (done) {
        const i = new Iterator(key);
        i.hasNext(result => {
            expect(result).to.equal(true);
            done();
        });
    });

    it('should have an available item (3.2)', function (done) {
        const i = new Iterator(key);
        i.next(result => {
            expect(result).to.deep.equal({ key: addedItemKey, value: addedItemValue, done: true });
            done();
        });
    });

    it('should dispose the item', function (done) {
        const i = new Iterator(key);
        i.dispose({ key: addedItemKey }, () => {
            // sets the next available item 1 minute into the future
            i.next(result => {
                expect(result).to.deep.equal({ done: true });
                done();
            });
        });
    });

    it('should have NO available item', function (done) {
        const i = new Iterator(key);
        i.hasNext(result => {
            expect(result).to.equal(false);
            done();
        });
    });

    it('should make the item available again', function (done) {
        const unixEarlier = moment()
            .subtract(30, 'seconds')
            .unix(); // setting this item in the past will make it available
        cli.zadd({ key, scomembers: [unixEarlier, addedItemKey] }).then(() => {
            cli.hmset({ key: addedItemKey, hash: addedItemValue }).then(result => {
                done();
            });
        });
    });
});

describe('Handle a sorted set with 2 or more values', function () {
    const key = 'my-favorite-road-trip';
    const addedItemKey = 'my-favorite-road-trip:France';
    const addedItemValue = { city: 'Paris', rating: '5/5' };
    const addedAnotherItemKey = 'my-favorite-road-trip:England';
    const addedAnotherItemValue = { city: 'London', rating: '4/5' };
    it('should make another item available', function (done) {
        const unixEarlier = moment()
            .subtract(10, 'seconds')
            .unix(); // setting this item in the past will make it available
        cli.zadd({ key, scomembers: [unixEarlier, addedAnotherItemKey] }).then(() => {
            cli.hmset({ key: addedAnotherItemKey, hash: addedAnotherItemValue }).then(() => {
                done();
            });
        });
    });

    it('should have an available item (4.1)', function (done) {
        const i = new Iterator(key);
        i.hasNext(result => {
            expect(result).to.equal(true);
            done();
        });
    });

    it('should have an available item (4.2)', function (done) {
        const i = new Iterator(key);
        i.next(result => {
            expect(result).to.be.deep.equal({ key: addedItemKey, value: addedItemValue, done: false });
            done();
        });
    });

    it('should dispose the item', function (done) {
        const i = new Iterator(key);
        const unixLater = moment()
            .add(3, 'minutes')
            .unix();
        function fn() {
            i.dispose({ key: addedItemKey, ts: unixLater });
        }
        expect(fn).not.to.throw(Error);
        done();
    });

    it("should have items' order updated", function (done) {
        cli.zrangebyscore({ key, withscores: false }).then(members => {
            expect(members).to.deep.equal(['my-favorite-road-trip:England', 'my-favorite-road-trip:France']);
            done();
        });
    });

    it('should have another available item (5.1)', function (done) {
        const i = new Iterator(key);
        i.hasNext(result => {
            expect(result).to.equal(true);
            done();
        });
    });

    it('should have another available item (5.2)', function (done) {
        const i = new Iterator(key);
        i.next(result => {
            expect(result).to.be.deep.equal({ key: addedAnotherItemKey, value: addedAnotherItemValue, done: true });
            done();
        });
    });

    it('should have another (same) available item since it was NOT poped(5.3)', function (done) {
        const i = new Iterator(key);
        i.next(result => {
            expect(result).to.be.deep.equal({ key: addedAnotherItemKey, value: addedAnotherItemValue, done: true });
            done();
        });
    });

    it('should dispose the item', function (done) {
        const i = new Iterator(key);
        function fn() {
            i.dispose({ key: addedAnotherItemKey }); // without setting a score
        }
        expect(fn).not.to.throw(Error);
        done();
    });

    it("should have items' order updated", function (done) {
        cli.zrangebyscore({ key, withscores: false }).then(members => {
            expect(members).to.deep.equal(['my-favorite-road-trip:France', 'my-favorite-road-trip:England']);
            done();
        });
    });

    it('should have NO available item (6.1)', function (done) {
        const i = new Iterator(key);
        i.hasNext(result => {
            expect(result).to.equal(false);
            done();
        });
    });

    it('should have NO available item (6.2)', function (done) {
        const i = new Iterator(key);
        i.next(result => {
            expect(result).to.be.deep.equal({ done: true });
            done();
        });
    });

    // it('should be able to comsume item', function (done) {});
    it('should be delete the test list item', function (done) {
        const i = new Iterator(key);
        cli.del({ key }).then(count => {
            i.hasNext(result => {
                expect(result).to.equal(false);
                done();
            });
        });
    });
});
