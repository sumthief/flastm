const makeRequest = require('../utils/requests');

const defaultParams = { pkg: 'album' };

module.exports = config => {
    const fetch = makeRequest(config);
    return {
        getInfoByMbid: (mbid, opts = {}) =>
            fetch({ ...defaultParams, action: 'getInfo', mbid, ...opts }),
        getInfo: (artist, album, opts = {}) =>
            fetch({
                ...defaultParams,
                action: 'getInfo',
                artist,
                album,
                ...opts
            }),
        getTagsByMbid: (mbid, opts = {}) =>
            fetch({ ...defaultParams, action: 'getTags', mbid, ...opts }),
        getTags: (artist, album, opts = {}) =>
            fetch({
                ...defaultParams,
                action: 'getTags',
                artist,
                album,
                ...opts
            }),
        getTopTagsByMbid: (mbid, opts = {}) =>
            fetch({ ...defaultParams, action: 'getTopTags', mbid, ...opts }),
        getTopTags: (artist, album, opts = {}) =>
            fetch({
                ...defaultParams,
                action: 'getTopTags',
                artist,
                album,
                ...opts
            }),
        search: (album, opts = {}) =>
            fetch({ ...defaultParams, action: 'search', album, ...opts }),
        addTags: (artist, album, tags, sk) =>
            fetch({
                ...defaultParams,
                action: 'addTags',
                artist,
                album,
                sk,
                tags,
                sign: true,
                method: 'post'
            }),
        removeTag: (artist, album, tag, sk) =>
            fetch({
                ...defaultParams,
                action: 'removeTag',
                artist,
                album,
                sk,
                tag,
                sign: true,
                method: 'post'
            })
    };
};
