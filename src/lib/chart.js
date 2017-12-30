const makeRequest = require('../utils/requests');

const defaultParams = { pkg: 'chart' };

module.exports = config => {
    const fetch = makeRequest(config);
    return {
        getTopArtists: (opts = {}) =>
            fetch({ ...defaultParams, action: 'getTopArtists', ...opts }),
        getTopTracks: (opts = {}) =>
            fetch({ ...defaultParams, action: 'getTopTracks', ...opts }),
        getTopTags: (opts = {}) =>
            fetch({ ...defaultParams, action: 'getTopTags', ...opts })
    };
};
