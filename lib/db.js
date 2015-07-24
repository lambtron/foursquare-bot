
/**
 * Module dependencies.
 */

var co = require('co');
var pg = require('co-pg')(require('pg'));
var connection = process.env.DATABASE_URL || '';

co(function *() {
  var client = new pg.Client(connection);
  yield client.connectPromise();
});
