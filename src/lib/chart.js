const fetch = require('../utils/requests').makeRequest;

const defaultParams = { pkg: 'chart' };

module.exports = {
    getTopArtists: (opts = {}) => fetch({...defaultParams, action: 'getTopArtists', ...opts}),
    getTopTracks: (opts = {}) => fetch({...defaultParams, action: 'getTopTracks', ...opts}),
    getTopTags: (opts = {}) => fetch({...defaultParams, action: 'getTopTags', ...opts})
};
