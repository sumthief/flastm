const fetch = require('../utils/requests').makeRequest;

const { password, username } = require('../../config');

const defaultParams = { pkg: 'auth' };

module.exports = {
    getToken: () => fetch({ ...defaultParams, action: 'getToken' }),
    getSession: token =>
        fetch({ ...defaultParams, action: 'getSession', token }),
    getMobileSession: () =>
        fetch({
            ...defaultParams,
            password,
            username,
            action: 'getMobileSession',
            method: 'post',
            sign: true,
            https: true
        })
};
