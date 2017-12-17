const axios = require('axios');
const qs = require('querystring');
const config = require('../../config');
const generateApiSignature = require('../utils/auth').generateApiSignature;

/**
 * Main method for make Last.fm API specific request.
 * @param {'get'|'post'} method - HTTP request`s method.
 * @param {string} pkg - Last.fm API`s package. Allowed values: album, artist, auth, chart, geo, library, tag, track, user.
 * @param {string} action - Method (action to do) for specified package. Examples: getInfo, getTopTrack, getCorrection, etc.
 * @param {boolean} sign - Flag which say if we need to sign this method.
 * @param {boolean} https - Flag which say if we need to use secure version of HTTP protocol.
 * @param {*} opts - Extra options such as lang, username, autocorrect and others.
 * @returns {Promise} - Promise formed by axios.
 */
export const makeRequest = ({
    method = 'get',
    pkg,
    action,
    sign = false,
    https = false,
    ...opts
}) => {
    const apiMethod = `${pkg}.${action}`;
    const isMethodGet = method.toLowerCase() === 'get';
    let data = {
        format: 'json',
        method: apiMethod,
        api_key: config.api_key,
        ...opts
    };
    // For getSession we also need api signature.
    if (sign) {
        data['api_sig'] = generateApiSignature(data);
    }

    const schema = https ? 'https' : 'http';
    const requestConfig = {
        method,
        url: `${schema}://ws.audioscrobbler.com/2.0/`
    };
    // Prepare request config in dependency of request method.
    if (isMethodGet) {
        requestConfig['params'] = data;
    } else {
        requestConfig['data'] = qs.stringify(data);
        requestConfig['headers'] = {
            'Content-Type': 'application/x-www-form-urlencoded'
        };
    }
    return axios(requestConfig);
};
