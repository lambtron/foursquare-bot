
/**
 * Module dependencies.
 */

var co = require('co');
var pg = require('co-pg')(require('pg'));
var connection = process.env.DATABASE_URL || '';

/**
 * Add a row
 */

exports.add = function *(row) {
  var client = new pg.Client(connection);
  yield client.conncetPromise();
  // yield client('CREATE TABLE IF NOT EXISTS venues
  // add row to pg
  return yield client.end();
};
