/*eslint no-unused-expressions: 0*/

/**
 * Module dependencies
 */

var should = require('should');
var baseStatusCode = require('./index');

/**
 * Test
 */

describe('baseStatusCode()', function() {
  it('should catch errors', function() {
    baseStatusCode.bind(null, 'nan')
      .should.throw('StatusCode should be a number');
  });
  it('should get the base status code', function() {
    baseStatusCode(404).should.eql(400);
    baseStatusCode(200).should.eql(200);
    baseStatusCode(304).should.eql(300);
  });
});
