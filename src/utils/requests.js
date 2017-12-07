const axios = require('axios');
const config = require('../../config');
const generateApiSignature = require('../utils/auth').generateApiSignature;

/**
 * Main method for make Last.fm API specific request.
 * @param {'get'|'post'} method - HTTP request`s method.
 * @param {string} pkg - Last.fm API`s package. Allowed values: album, artist, auth, chart, geo, library, tag, track, user.
 * @param {string} action - Method (action to do) for specified package. Examples: getInfo, getTopTrack, getCorrection, etc.
 * @param {*} opts - Extra options such as lang, username, autocorrect and others.
 * @returns {Promise} - Promise formed by axios.
 */
export const makeRequest = ({method = 'get', pkg, action, ...opts}) => {
  const apiMethod = `${pkg}.${action}`;
  let data = {
    format: 'json',
    method: apiMethod,
    api_key: config.api_key,
    ...opts
  };
  // For getSession we also need api signature.
  if (apiMethod === 'auth.getSession' && data['token']) {
    data['api_sig'] = generateApiSignature(data);
  }
  // Wrap data in axios 'get' request`s compatible format.
  if (method.toLowerCase() === 'get') {
    data = { params: data };
  }
  return axios[method]('http://ws.audioscrobbler.com/2.0/', data);
};
