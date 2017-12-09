const fetch = require('../utils/requests').makeRequest;

const defaultParams = { pkg: 'track' };

module.exports = {
    getCorrection: (artist, track) => fetch({...defaultParams, artist, track, action: 'getCorrection'}),
    getInfo: (artist, track, opts) => fetch({...defaultParams, artist, track, action: 'getInfo', ...opts}),
    getInfoByMbid: (mbid, opts) => fetch({...defaultParams, mbid, action: 'getInfo', ...opts}),
    getSimilar: (artist, track, opts) => fetch({...defaultParams, artist, track, action: 'getSimilar', ...opts}),
    getSimilarByMbid: (mbid, opts) => fetch({...defaultParams, mbid, action: 'getSimilar', ...opts}),
    getTags: (artist, track, opts) => fetch({...defaultParams, artist, track, action: 'getTags', ...opts}),
    getTagsByMbid: (mbid, opts) => fetch({...defaultParams, mbid, action: 'getTags', ...opts}),
    getTopTags: (artist, track, opts) => fetch({...defaultParams, artist, track, action: 'getTopTags', ...opts}),
    getTopTagsByMbid: (mbid, opts) => fetch({...defaultParams, mbid, action: 'getTopTags', ...opts}),
    search: (track, opts) => fetch({...defaultParams, track, action: 'search', ...opts}),
    addTags: (artist, track, tags, sk) => fetch({...defaultParams, artist, track, tags, sk, action: 'addTags', method: 'post', sign: true}),
    love: (artist, track, sk) => fetch({...defaultParams, artist, track, sk, action: 'love', method: 'post', sign: true}),
    removeTag: (artist, track, tag, sk) => fetch({...defaultParams, artist, track, tag, sk, action: 'removeTag', method: 'post', sign: true}),
    unlove: (artist, track, sk) => fetch({...defaultParams, artist, track, sk, action: 'unlove', method: 'post', sign: true}),
    updateNowPlaying: (artist, track, sk, opts) => fetch({...defaultParams, artist, track, sk, method: 'post', action: 'updateNowPlaying', sign: true, ...opts})
};
