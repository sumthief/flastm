const fetch = require('../utils/requests').makeRequest;

const defaultParams = { pkg: 'artist' };

module.exports = {
    getCorrection: artist => fetch({...defaultParams, action: 'getCorrection', artist}),
    getInfo: (artist, opts = {}) => fetch({...defaultParams, action: 'getInfo', artist, ...opts}),
    getInfoByMbid: (mbid, opts = {}) => fetch({...defaultParams, action: 'getInfo', artist, ...opts}),
    getSimilar: (artist, opts = {}) => fetch({...defaultParams, action: 'getSimilar', artist, ...opts}),
    getSimilarByMbid: (mbid, opts = {}) => fetch({...defaultParams, action: 'getSimilar', mbid, ...opts}),
    getTagsByMbid: (mbid, opts = {}) => fetch({...defaultParams, action: 'getTags', mbid, ...opts}),
    getTags: (artist, opts = {}) => fetch({...defaultParams, action: 'getTags', artist, ...opts}),
    getTopTagsByMbid: (mbid, opts = {}) => fetch({...defaultParams, action: 'getTopTags', mbid, ...opts}),
    getTopTags: (artist, opts = {}) => fetch({...defaultParams, action: 'getTopTags', artist, ...opts}),
    getTopAlbumsByMbid: (mbid, opts = {}) => fetch({...defaultParams, action: 'getTopAlbums', mbid, ...opts}),
    getTopAlbums: (artist, opts = {}) => fetch({...defaultParams, action: 'getTopAlbums', artist, ...opts}),
    getTopTracksByMbid: (mbid, opts = {}) => fetch({...defaultParams, action: 'getTopTracks', mbid, ...opts}),
    getTopTracks: (artist, opts = {}) => fetch({...defaultParams, action: 'getTopTracks', artist, ...opts}),
    search: (artist, opts = {}) => fetch({...defaultParams, action: 'search', artist, ...opts}),
    addTags: (artist, tags, sk) => fetch({...defaultParams, action: 'addTags', artist, tags, sk, method: 'post'}),
    removeTag: (artist, tag, sk) => fetch({...defaultParams, action: 'removeTag', artist, tag, sk, method: 'post'})
};
