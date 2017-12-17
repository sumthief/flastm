const fetch = require('../utils/requests').makeRequest;

const defaultParams = { pkg: 'tag' };

module.exports = {
    getInfo: (tag, opts = {}) =>
        fetch({ ...defaultParams, action: 'getInfo', tag, ...opts }),
    getSimilar: tag => fetch({ ...defaultParams, action: 'getSimilar', tag }),
    getTopAlbums: (tag, opts = {}) =>
        fetch({ ...defaultParams, action: 'getTopAlbums', tag, ...opts }),
    getTopArtists: (tag, opts = {}) =>
        fetch({ ...defaultParams, action: 'getTopArtists', tag, ...opts }),
    getTopTracks: (tag, opts = {}) =>
        fetch({ ...defaultParams, action: 'getTopTracks', tag, ...opts }),
    getTopTags: () => fetch({ ...defaultParams, action: 'getTopTags' }),
    getWeeklyChartList: tag =>
        fetch({ ...defaultParams, action: 'getWeeklyChartList', tag })
};
