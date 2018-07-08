const axios = require('axios');
const qs = require('querystring');
const crypto = require('crypto');
const StringDecoder = require('string_decoder').StringDecoder;

const RESPONSE_FORMAT = 'json';
const REQUEST_BASE_URL = '//ws.audioscrobbler.com/2.0/';
const EXCLUDED_KEYS = ['format', 'callback'];

const utf8StringDecoder = new StringDecoder('utf8');

/**
 * Create md5 hash.
 * @param {string} data - String to hash.
 * @returns {string} - md5 hashed string.
 */
const createMD5Hash = data => {
    const hash = crypto.createHash('md5');
    return hash
        .update(data)
        .digest()
        .toString('hex');
};

/**
 * Generate API signature for auth requests.
 * @param {Object} params - Query data params.
 * @param {string} secret - Secret.
 * @returns {string} - Valid API signature.
 */
const generateApiSignature = (params, secret) => {
    // Sort keys in alphabet order and handle all keys except excluded.
    const baseSignature = Object.keys(params)
        .sort()
        .reduce((prev, key) => {
            if (params.hasOwnProperty(key) && !EXCLUDED_KEYS.includes(key)) {
                prev += `${key}${utf8StringDecoder.end((params[key]).toString())}`;
            }
            return prev;
        }, '');
    return createMD5Hash(`${baseSignature}${secret}`);
};

/**
 * We can get 3 scenarios in work with API:
 *  - something gonna wrong with server - 4xx, 5xx status codes
 *  - 2xx status codes and valid result if all is OK
 *  - 2xx status codes and error in data if request params point invalid data.
 * So this function is a wrapper for axios' promises which manipulate data
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

// /**
//  * Main method for make Last.fm API specific request.
//  * @param {'get'|'post'} method - HTTP request`s method.
//  * @param {string} pkg - Last.fm API`s package. Allowed values: album, artist, auth, chart, geo, library, tag, track, user.
//  * @param {string} action - Method (action to do) for specified package. Examples: getInfo, getTopTrack, getCorrection, etc.
//  * @param {boolean} sign - Flag which say if we need to sign this method.
//  * @param {boolean} https - Flag which say if we need to use secure version of HTTP protocol.
//  * @param {*} opts - Extra options such as lang, username, autocorrect and others.
//  * @returns {Promise} - Promise formed by axios.
//  */
module.exports = config => {
    return ({
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
            api_key: config.api_key,
            format: RESPONSE_FORMAT,
            method: apiMethod,
            ...opts
        };
        // For signed methods we need additional param - api_sig.
        if (sign) {
            data['api_sig'] = generateApiSignature(data, config.secret);
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
};
