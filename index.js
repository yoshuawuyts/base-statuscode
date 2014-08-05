/**
 * Module dependencies.
 */

var assert = require('assert');

/**
 * Base status code.
 *
 * @param {Number} statusCode
 * @return {Number}
 * @api public
 */

module.exports = function baseStatus(statusCode) {
  assert('number' == typeof statusCode, 'StatusCode should be a number');
  return ~~(statusCode / 100) * 100;
}