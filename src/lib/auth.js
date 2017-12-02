const crypto = require('crypto');
const qs = require('querystring');
const config = require('../../config');
const fetch = require('../utils/requests').makeRequest;

const defaultParams = { pkg: 'auth' };

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
 * Create signature for auth method.
 * @param {string} method - Auth method to execute.
 * @returns {string} - Built signature.
 */
const getApiSignature = method => {
    return createMD5Hash(`api_key${config.api_key}methodauth.${method}token${config.secret}`);
};


module.exports = {
    getToken: () => fetch({...defaultParams, action: 'getToken'})
};
