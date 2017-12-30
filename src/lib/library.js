const makeRequest = require('../utils/requests');

const defaultParams = { pkg: 'library' };

module.exports = config => {
    const fetch = makeRequest(config);
    return {
        getArtists: (user, opts = {}) =>
            fetch({ ...defaultParams, action: 'getArtists', user, ...opts })
    };
};
