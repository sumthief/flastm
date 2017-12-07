const fetch = require('../utils/requests').makeRequest;

const defaultParams = { pkg: 'auth' };

module.exports = {
    getToken: () => fetch({...defaultParams, action: 'getToken'}),
    getSession: token => fetch({...defaultParams, action: 'getSession', token})
};
