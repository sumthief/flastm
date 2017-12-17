const crypto = require('crypto');
const qs = require('querystring');
const config = require('../../config');
const StringDecoder = require('string_decoder').StringDecoder;

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
 * @returns {string} - Valid API signature.
 */
const generateApiSignature = params => {
    // Sort keys in alphabet order and handle all keys except excluded.
    const baseSignature = Object.keys(params)
        .sort()
        .reduce((prev, key) => {
            if (params.hasOwnProperty(key) && !EXCLUDED_KEYS.includes(key)) {
                prev += `${key}${utf8StringDecoder.end(params[key])}`;
            }
            return prev;
        }, '');
    return createMD5Hash(`${baseSignature}${config.secret}`);
};

module.exports = {
    generateApiSignature
};
