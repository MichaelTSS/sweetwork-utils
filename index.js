/* eslint-disable no-param-reassign */

const HTTP = require('q-io/http');
const bufferStream = require('q-io/buffer-stream');
const _ = require('lodash');
const moment = require('moment-timezone');

const CircularSortedSetIterator = require('./iterators/circular-sorted-set-iterator');

/**
 * authJWT - utility function that is used by RPC-purposed repos to auth to the target services
 *
 * @param  {string} host
 * @param  {object} headers
 * @param  {string} serviceName
 * @param  {string} passphrase
 * @return {promise}
 */
function authJWT(host, headers, serviceName, passphrase) {
  return new Promise((resolve, reject) => {
    HTTP.request({
      url: `${host}/auth`,
      method: 'POST',
      headers,
      body: bufferStream(
        Buffer.from(
          JSON.stringify({ service: serviceName, passphrase }),
          'utf8',
        ),
      ),
    }).then(
      res => {
        res.body.read().then(body => {
          const response = JSON.parse(Buffer.from(body, 'utf8'));
          if (response.token) resolve(response.token);
          else reject();
        });
      },
      err => {
        reject(err);
      },
    );
  });
}

/**
 * groupTicksByInterval - utility function that transorm an array of timestamps into a proper series grouped by intervals
 *
 * @param  {array} timestamps [1408140000000, 1425855600000, 1444514400000, 1447542000000, 1456441200000, 1463781600000]
 * @param  {string} interval Choices are 'month', 'week', 'day', 'hour', 'minute'. Default is 'day'
 * @return {array} series [[1408140000000, 1], [1425855600000, 1], [1444514400000, 1], [1447542000000, 1], [1456441200000, 1], [1463781600000, 1]]
 */
function groupTicksByInterval(data, interval = 'day') {
  if (interval === 'week') interval = 'isoweek'; // based on http://stackoverflow.com/a/18875953/5690465
  return _.chain(data)
    .groupBy(ts => {
      if (String(ts).length === 10) ts = parseInt(ts, 10) * 1000;
      else if (String(ts).length === 11) ts = parseInt(ts, 10) * 100;
      else if (String(ts).length === 12) ts = parseInt(ts, 10) * 10;
      else if (String(ts).length === 13) ts = parseInt(ts, 10);
      return moment(ts)
        .startOf(interval)
        .valueOf();
    })
    .map((g, ts) => [parseInt(ts, 10), g.length])
    .value();
}

function avgTickNamesByInterval(data, interval = 'day') {
  if (interval === 'week') interval = 'isoweek';
  const newData = [];
  for (let i = 0, c = data.length; i < c; i += 2) {
    newData.push([data[i + 1], data[i]]);
  }
  return _.chain(newData)
    .map(ts => {
      if (String(ts[0]).length === 10) ts[0] = parseInt(ts, 10) * 1000;
      else if (String(ts[0]).length === 11) ts[0] = parseInt(ts, 10) * 100;
      else if (String(ts[0]).length === 12) ts[0] = parseInt(ts, 10) * 10;
      else if (String(ts[0]).length === 13) ts[0] = parseInt(ts, 10);
      return [
        moment(ts[0])
          .startOf(interval)
          .valueOf(),
        ts[1],
      ];
    })
    .groupBy(member => member[0])
    .map((val, ts) => {
      const v = val.map(m => parseInt(m[1], 10));
      return [parseInt(ts, 10), Math.round(_.sum(v) / v.length)];
    })
    .value();
}

/**
 * groupTickNamesByInterval - utility function that transorm an array of timestamps and names and groups by name (keeps all the timestamps)
 *
 * @param  {array} timestamps_names_arrays [1408140000, 'A', 1425855600, 'B', 1444514400, 'A', 1447542000, 'A', 1456441200, 'B', 1463781600, 'A']
 * @param  {string} interval Choices are 'month', 'week', 'day', 'hour', 'minute'. Default is 'day'
 * @return {array} series_or_arrays [{ name: 'A', values: [1408140000, 1444514400, 1447542000, 1463781600] },
 { name: 'B', values: [1425855600, 1456441200] }]
 */
// function groupTickNamesByInterval(data, interval = 'day') {
//     if (interval === 'week') interval = 'isoweek';
//     const newData = [];
//     for (let i = 0, c = data.length; i < c; i += 2) {
//         newData.push([data[i], data[i + 1]]);
//     }
//     return _.chain(newData)
//         .groupBy(member => member[0])
//         .map((val, key) => {
//             const v = val.map(m => parseInt(m[1], 10));
//             return { values: v, name: key };
//         })
//         .value();
// }

module.exports = {
  authJWT,
  CircularSortedSetIterator,
  groupTicksByInterval,
  avgTickNamesByInterval,
  // groupTickNamesByInterval
};
