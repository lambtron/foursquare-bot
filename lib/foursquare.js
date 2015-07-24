
/**
 * Module dependencies.
 */

var request = require('superagent');

/**
 * Get trending data from foursquare.
 */

exports.trending = function *() {
  var uri = 'https://api.foursquare.com/v2/venues/trending?ll=37.774929,-122.419416&client_id=ZRROZXGUWWQV35ADWBBZJD1KWZDLJKVV2BDYVY1SDCNI1ZUY&client_secret=0ASJ5BFV3J032HOZQS5S5K1XRM2IWQ5XY51YRCMH1NFZUDHF&v=20141101';
  return yield get(uri);
};

/**
 * Thunkified get request.
 */

function get(uri) {
  return function(fn) {
    request
      .get(uri)
      .end(fn);
  };
}
