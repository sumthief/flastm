const requests = require('../utils/requests');
const fetch = requests.makeRequest;

const defaultParams = { pkg: 'library' };

module.exports = {
    getArtists: (user, opts = {}) => fetch({...defaultParams, action: 'getArtists', user, ...opts})
};
