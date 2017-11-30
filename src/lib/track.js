const requests = require('../utils/requests');
const fetch = requests.makeRequest;

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
    search: (track, opts) => fetch({...defaultParams, track, action: 'search', ...opts})
};
