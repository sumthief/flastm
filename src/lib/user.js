const fetch = require('../utils/requests').makeRequest;

const defaultParams = { pkg: 'user' };

module.exports = {
    getArtistTracks: (user, artist, opts) => fetch({...defaultParams, user, artist, action: 'getArtistTracks', ...opts}),
    getFriends: (user, opts) => fetch({...defaultParams, user, action: 'getFriends', ...opts}),
    getInfo: (opts) => fetch({...defaultParams, action: 'getInfo', ...opts}),
    getLovedTracks: (user, opts) => fetch({...defaultParams, user, action: 'getLovedTracks', ...opts}),
    getPersonalTags: (user, tag, taggingtype, opts) => fetch({...defaultParams, user, tag, taggingtype, action: 'getPersonalTags', ...opts}),
    getRecentTracks: (user, opts) => fetch({...defaultParams, user, action: 'getRecentTracks', ...opts}),
    getTopAlbums: (user, opts) => fetch({...defaultParams, user, action: 'getTopAlbums', ...opts}),
    getTopArtists: (user, opts) => fetch({...defaultParams, user, action: 'getTopArtists', ...opts}),
    getTopTags: (user, opts) => fetch({...defaultParams, user, action: 'getTopTags', ...opts}),
    getTopTracks: (user, opts) => fetch({...defaultParams, user, action: 'getTopTracks', ...opts}),
    getWeeklyAlbumChart: (user, opts) => fetch({...defaultParams, user, action: 'getWeeklyAlbumChart', ...opts}),
    getWeeklyArtistChart: (user, opts) => fetch({...defaultParams, user, action: 'getWeeklyArtistChart', ...opts}),
    getWeeklyChartList: (user, opts) => fetch({...defaultParams, user, action: 'getWeeklyChartList', ...opts}),
    getWeeklyTrackChart: (user, opts) => fetch({...defaultParams, user, action: 'getWeeklyTrackChart', ...opts}),
};
