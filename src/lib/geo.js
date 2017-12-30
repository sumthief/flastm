const makeRequest = require('../utils/requests');

const defaultParams = { pkg: 'geo' };

module.exports = config => {
    const fetch = makeRequest(config);
    return {
        getTopArtists: (country, opts = {}) =>
            fetch({
                ...defaultParams,
                action: 'getTopArtists',
                country,
                ...opts
            }),
        getTopTracks: (country, opts = {}) =>
            fetch({
                ...defaultParams,
                action: 'getTopTracks',
                country,
                ...opts
            })
    };
};
