const _fetchMap = new Map();

/**
 * A callback to parse Response body.
 * 
 * @callback ResponseParser
 * @param {Fetch.Response} response
 * @returns {Promise}
 */

/**
 * A minimal in-memory map to de-duplicate Fetch API media requests.
 * 
 * @param {String} uri
 * @param {Object} [options={}]
 * @param {ResponseParser} [options.responseParser=(response) => response.text()]
 * @returns {Promise}
 */
const cacheFetch = (uri, options = {}) => {
  const responseParser = options.responseParser || ((response) => response.text());
  if (!_fetchMap.has(uri)) {
    _fetchMap.set(uri, fetch(uri).then(responseParser));
  }
  return _fetchMap.get(uri);  
}

export default cacheFetch;