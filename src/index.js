const album = require('./lib/album');
const artist = require('./lib/artist');
const auth = require('./lib/auth');
const chart = require('./lib/chart');
const geo = require('./lib/geo');
const library = require('./lib/library');
const tag = require('./lib/tag');
const track = require('./lib/track');
const user = require('./lib/user');

module.exports = config => {
    return {
        album: album(config),
        artist: artist(config),
        auth: auth(config),
        chart: chart(config),
        geo: geo(config),
        library: library(config),
        tag: tag(config),
        track: track(config),
        user: user(config)
    };
};
