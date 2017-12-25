const axios = require('axios');
const qs = require('querystring');
const { api_key } = require('../../config');
const generateApiSignature = require('../utils/auth').generateApiSignature;

const RESPONSE_FORMAT = 'json';
const REQUEST_BASE_URL = '//ws.audioscrobbler.com/2.0/';

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
        api_key,
        format: RESPONSE_FORMAT,
        method: apiMethod,
        ...opts
    };
    // For signed methods we need additional param - api_sig.
    if (sign) {
        data['api_sig'] = generateApiSignature(data);
    }

    const schema = https ? 'https' : 'http';
    const requestConfig = {
        method,
        url: `${schema}:${REQUEST_BASE_URL}`
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
    return handleResult(axios(requestConfig));
};

/**
 * We can get 3 scenarios in work with API:
 *  - something gonna wrong with server - 4xx, 5xx status codes
 *  - 2xx status codes and valid result if all is OK
 *  - 2xx status codes and error in data if request params point invalid data.
 * So this function is a wrapper under axios' promises which manipulate data
 * to reject request with 2xx status code and error containing data.
 * @param {Promise} promise - axios' promise
 * @returns {Promise<*>} - Wrapping promise which manipulates data in right way
 */
const handleResult = promise => {
    return new Promise((resolve, reject) => {
        promise
            .then(res => res.data)
            .then(res => (res.error ? reject(res) : resolve(res)))
            .catch(err => {
                const dataDefined = err.response && err.response.data;
                dataDefined
                    ? reject(dataDefined)
                    : reject({ error: 'Unknown error', payload: err });
            });
    });
};
