const makeRequest = require('../utils/requests');

const defaultParams = { pkg: 'auth' };

module.exports = config => {
    const fetch = makeRequest(config);
    const { password, username } = config;
    return {
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
};
