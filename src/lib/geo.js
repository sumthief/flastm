const fetch = require('../utils/requests').makeRequest;

const defaultParams = { pkg: 'geo' };

module.exports = {
    getTopArtists: (country, opts = {}) =>
        fetch({ ...defaultParams, action: 'getTopArtists', country, ...opts }),
    getTopTracks: (country, opts = {}) =>
        fetch({ ...defaultParams, action: 'getTopTracks', country, ...opts })
};
