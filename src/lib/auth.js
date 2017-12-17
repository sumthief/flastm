const fetch = require('../utils/requests').makeRequest;

const config = require('../../config');

const defaultParams = { pkg: 'auth' };

module.exports = {
    getToken: () => fetch({ ...defaultParams, action: 'getToken' }),
    getSession: token =>
        fetch({ ...defaultParams, action: 'getSession', token }),
    getMobileSession: () =>
        fetch({
            ...defaultParams,
            action: 'getMobileSession',
            password: config.auth_mobile.password,
            username: config.auth_mobile.username,
            method: 'post',
            sign: true,
            https: true
        })
};
