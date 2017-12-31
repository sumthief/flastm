export const convertDataToMock = data => {
    const type = typeof data;
    switch (type) {
        case 'string':
            return '';
        case 'number':
            return 0;
        case 'boolean':
            return true;
        case 'undefined':
            return;
        case 'object':
            if (data == null) {
                return data;
            } else if (Array.isArray(data)) {
                return [];
            } else {
                Object.keys(data).forEach(
                    item => (data[item] = convertDataToMock(data[item]))
                );
                return data;
            }
    }
};

export const ALBUM_DATA_EXAMPLES = {
    valid: {
        artist: 'breaking benjamin',
        album: 'phobia',
        mbid: '326936d7-feec-48d5-bb9f-286552c1f804'
    },
    invalid: {
        artist: 'broaking benjamin',
        album: 'phobia',
        mbid: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'
    }
};

export const ARTIST_DATA_EXAMPLES = {
    valid: {
        artist: 'breaking benjamin',
        mbid: '854a1807-025b-42a8-ba8c-2a39717f1d25'
    },
    invalid: {
        artist: 'broaking benjamin',
        mbid: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'
    }
};

export const TRACK_DATA_EXAMPLES = {
    valid: {
        artist: 'breaking benjamin',
        track: 'dance with devil',
        mbid: '188ff26f-3892-4443-a981-4d0c395a8377'
    },
    invalid: {
        artist: 'broaking benjamin',
        track: 'd0nce with d3vil',
        mbid: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'
    }
};

export const USER_DATA_EXAMPLES = {
    taggingtypes: {
        artist: 'artist',
        album: 'album',
        track: 'track'
    },
    valid: {
        artist: 'breaking benjamin'
    },
    invalid: {
        artist: 'broaking benjamin'
    }
};

export const ALBUM_VALID_MOCKS = {};

ALBUM_VALID_MOCKS['album'] = {
    album: {
        name: '',
        artist: '',
        mbid: '',
        url: '',
        image: [],
        listeners: '',
        playcount: '',
        tracks: {
            track: []
        },
        tags: {
            tag: []
        },
        wiki: {
            published: '',
            summary: '',
            content: ''
        }
    }
};

ALBUM_VALID_MOCKS['album_empty'] = {
    album: {
        name: '',
        artist: '',
        url: '',
        image: [],
        listeners: '',
        playcount: '',
        tracks: { track: [] },
        tags: { tag: [] }
    }
};

ALBUM_VALID_MOCKS['search'] = {
    results: {
        '@attr': {
            for: ''
        },
        albummatches: {
            album: []
        },
        'opensearch:Query': {
            '#text': '',
            role: '',
            searchTerms: '',
            startPage: ''
        },
        'opensearch:itemsPerPage': '',
        'opensearch:startIndex': '',
        'opensearch:totalResults': ''
    }
};

ALBUM_VALID_MOCKS['tags'] = {
    tags: { '@attr': { album: '', artist: '' }, tag: [] }
};

ALBUM_VALID_MOCKS['toptags'] = {
    toptags: { '@attr': { album: '', artist: '' }, tag: [] }
};

export const ARTIST_VALID_MOCKS = {};

ARTIST_VALID_MOCKS['correction'] = {
    corrections: {
        correction: {
            '@attr': { index: '' },
            artist: { mbid: '', name: '', url: '' }
        }
    }
};

ARTIST_VALID_MOCKS['correction_empty'] = { corrections: '' };

ARTIST_VALID_MOCKS['artist'] = {
    artist: {
        name: '',
        mbid: '',
        url: '',
        image: [],
        streamable: '',
        ontour: '',
        stats: { listeners: '', playcount: '' },
        similar: { artist: [] },
        tags: { tag: [] },
        bio: {
            links: { link: { '#text': '', rel: '', href: '' } },
            published: '',
            summary: '',
            content: ''
        }
    }
};

ARTIST_VALID_MOCKS['artist_empty'] = {
    artist: {
        name: '',
        url: '',
        image: [],
        streamable: '',
        ontour: '',
        stats: { listeners: '', playcount: '' },
        similar: { artist: [] },
        tags: { tag: [] },
        bio: {
            links: { link: { '#text': '', rel: '', href: '' } },
            published: '',
            summary: '',
            content: ''
        }
    }
};

ARTIST_VALID_MOCKS['similar'] = {
    similarartists: { artist: [], '@attr': { artist: '' } }
};

ARTIST_VALID_MOCKS['tags'] = { tags: { '@attr': { artist: '' }, tag: [] } };

ARTIST_VALID_MOCKS['toptags'] = {
    toptags: { '@attr': { artist: '' }, tag: [] }
};

ARTIST_VALID_MOCKS['topalbums'] = {
    topalbums: {
        '@attr': {
            artist: '',
            page: '',
            perPage: '',
            total: '',
            totalPages: ''
        },
        album: []
    }
};

ARTIST_VALID_MOCKS['toptracks'] = {
    toptracks: {
        '@attr': {
            artist: '',
            page: '',
            perPage: '',
            total: '',
            totalPages: ''
        },
        track: []
    }
};

ARTIST_VALID_MOCKS['search'] = {
    results: {
        '@attr': { for: '' },
        artistmatches: { artist: [] },
        'opensearch:Query': {
            '#text': '',
            role: '',
            searchTerms: '',
            startPage: ''
        },
        'opensearch:itemsPerPage': '',
        'opensearch:startIndex': '',
        'opensearch:totalResults': ''
    }
};

export const AUTH_VALID_MOCKS = {};

AUTH_VALID_MOCKS['token'] = { token: '' };

AUTH_VALID_MOCKS['mobileSession'] = {
    session: { key: '', name: '', subscriber: 0 }
};

export const CHART_VALID_MOCKS = {};

CHART_VALID_MOCKS['topArtists'] = {
    artists: {
        '@attr': { page: '', perPage: '', total: '', totalPages: '' },
        artist: []
    }
};

CHART_VALID_MOCKS['topTracks'] = {
    tracks: {
        '@attr': { page: '', perPage: '', total: '', totalPages: '' },
        track: []
    }
};

CHART_VALID_MOCKS['topTags'] = {
    tags: {
        '@attr': { page: '', perPage: '', total: '', totalPages: '' },
        tag: []
    }
};

export const GEO_VALID_MOCKS = {};

GEO_VALID_MOCKS['topArtists'] = {
    topartists: {
        '@attr': {
            country: '',
            page: '',
            perPage: '',
            total: '',
            totalPages: ''
        },
        artist: []
    }
};

GEO_VALID_MOCKS['topTracks'] = {
    tracks: {
        '@attr': {
            country: '',
            page: '',
            perPage: '',
            total: '',
            totalPages: ''
        },
        track: []
    }
};

export const LIBRARY_VALID_MOCKS = {
    artists: {
        artists: {
            '@attr': {
                page: '',
                perPage: '',
                total: '',
                totalPages: '',
                user: ''
            },
            artist: []
        }
    }
};

export const TAG_VALID_MOCKS = {};

TAG_VALID_MOCKS.tag = {
    tag: { name: '', reach: 0, total: 0, wiki: { content: '', summary: '' } }
};

TAG_VALID_MOCKS.similar = { similartags: { '@attr': { tag: '' }, tag: [] } };

TAG_VALID_MOCKS.albums = {
    albums: {
        '@attr': { page: '', perPage: '', tag: '', total: '', totalPages: '' },
        album: []
    }
};

TAG_VALID_MOCKS.topartists = {
    topartists: {
        '@attr': { page: '', perPage: '', tag: '', total: '', totalPages: '' },
        artist: []
    }
};

TAG_VALID_MOCKS.tracks = {
    tracks: {
        '@attr': { page: '', perPage: '', tag: '', total: '', totalPages: '' },
        track: []
    }
};

TAG_VALID_MOCKS.toptags = {
    toptags: { '@attr': { num_res: 0, offset: 0, total: 0 }, tag: [] }
};

TAG_VALID_MOCKS.weeklychartlist = {
    weeklychartlist: { '@attr': { tag: '' }, chart: [] }
};

export const TRACK_VALID_MOCKS = {};

TRACK_VALID_MOCKS['correction'] = {
    corrections: {
        correction: {
            track: { url: '', artist: { name: '', url: '' } },
            '@attr': { index: '', artistcorrected: '', trackcorrected: '' }
        }
    }
};

TRACK_VALID_MOCKS['track'] = {
    track: {
        name: '',
        mbid: '',
        url: '',
        duration: '',
        streamable: { '#text': '', fulltrack: '' },
        listeners: '',
        playcount: '',
        artist: { name: '', mbid: '', url: '' },
        album: {
            artist: '',
            title: '',
            mbid: '',
            url: '',
            image: [],
            '@attr': { position: '' }
        },
        toptags: { tag: [] }
    }
};

TRACK_VALID_MOCKS['similar'] = {
    similartracks: { track: [], '@attr': { artist: '' } }
};

TRACK_VALID_MOCKS['tags'] = {
    tags: { '#text': '', '@attr': { artist: '', track: '' } }
};

TRACK_VALID_MOCKS['toptags'] = {
    toptags: { '@attr': { artist: '', track: '' }, tag: [] }
};

TRACK_VALID_MOCKS['search'] = {
    results: {
        '@attr': {},
        'opensearch:Query': { '#text': '', role: '', startPage: '' },
        'opensearch:itemsPerPage': '',
        'opensearch:startIndex': '',
        'opensearch:totalResults': '',
        trackmatches: { track: [] }
    }
};

TRACK_VALID_MOCKS['nowPlaying'] = {
    nowplaying: {
        album: { '#text': '', corrected: '' },
        albumArtist: { '#text': '', corrected: '' },
        artist: { '#text': '', corrected: '' },
        ignoredMessage: { '#text': '', code: '' },
        track: { '#text': '', corrected: '' }
    }
};

export const USER_VALID_MOCKS = {};

USER_VALID_MOCKS['artistTracks'] = {
    artisttracks: {
        '@attr': {
            artist: '',
            page: '',
            perPage: '',
            total: '',
            totalPages: '',
            user: ''
        },
        track: []
    }
};

USER_VALID_MOCKS['user'] = {
    user: {
        age: '',
        bootstrap: '',
        country: '',
        gender: '',
        image: [],
        name: '',
        playcount: '',
        playlists: '',
        registered: { '#text': 0, unixtime: '' },
        subscriber: '',
        type: '',
        url: ''
    }
};

USER_VALID_MOCKS['lovedtracks'] = {
    lovedtracks: {
        '@attr': { page: '', perPage: '', total: '', totalPages: '', user: '' },
        track: []
    }
};

USER_VALID_MOCKS['friends'] = {
    friends: {
        '@attr': { for: '', page: '', perPage: '', total: '', totalPages: '' },
        user: []
    }
};

USER_VALID_MOCKS['taggings'] = {
    taggings: {
        '@attr': {
            page: '',
            perPage: '',
            tag: '',
            total: '',
            totalPages: '',
            user: ''
        },
        albums: { album: [] }
    }
};

USER_VALID_MOCKS['recentTracks'] = {
    recenttracks: {
        '@attr': { page: '', perPage: '', total: '', totalPages: '', user: '' },
        track: []
    }
};

USER_VALID_MOCKS['topAlbums'] = {
    topalbums: {
        '@attr': { page: '', perPage: '', total: '', totalPages: '', user: '' },
        album: []
    }
};

USER_VALID_MOCKS['topArtists'] = {
    topartists: {
        '@attr': { page: '', perPage: '', total: '', totalPages: '', user: '' },
        artist: []
    }
};

USER_VALID_MOCKS['topTags'] = { toptags: { '@attr': { user: '' }, tag: [] } };

USER_VALID_MOCKS['topTracks'] = {
    toptracks: {
        '@attr': { page: '', perPage: '', total: '', totalPages: '', user: '' },
        track: []
    }
};

USER_VALID_MOCKS['weeklyAlbumChart'] = {
    weeklyalbumchart: { '@attr': { from: '', to: '', user: '' }, album: [] }
};

USER_VALID_MOCKS['weeklyArtistChart'] = {
    weeklyartistchart: { '@attr': { from: '', to: '', user: '' }, artist: [] }
};

USER_VALID_MOCKS['weeklyChartList'] = {
    weeklychartlist: { '@attr': { user: '' }, chart: [] }
};

USER_VALID_MOCKS['weeklyTrackChart'] = {
    weeklytrackchart: { '@attr': { from: '', to: '', user: '' }, track: [] }
};

export const INVALID_RESPONSE_STRUCTURE_MOCK = {
    error: 0,
    message: '',
    links: []
};

export const BAD_REQUEST_STRUCTURE_MOCK = {
    error: 0,
    message: ''
};
