const axios = require('axios');
const config = require('../../config');

/**
 * Main method for make Last.fm API specific request.
 * @param {'get'|'post'} method - HTTP request`s method.
 * @param {string} pkg - Last.fm API`s package. Allowed values: album, artist, auth, chart, geo, library, tag, track, user.
 * @param {string} action - Method (action to do) for specified package. Examples: getInfo, getTopTrack, getCorrection, etc.
 * @param {object} opts - Extra options such as lang, username, autocorrect and others.
 * @returns {Promise} - Promise formed by axios.
 */
export const makeRequest = ({method = 'get', pkg, action, ...opts}) => {
  let data = {
    format: 'json',
    method: `${pkg}.${action}`,
    api_key: config.api_key,
    ...opts
  };
  // Wrap data in axios 'get' request`s compatible format.
  if (method.toLowerCase() === 'get') {
    data = { params: data };
  }
  return axios[method]('http://ws.audioscrobbler.com/2.0/', data);
};
