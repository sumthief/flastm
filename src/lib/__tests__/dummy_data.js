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

export const INVALID_RESPONSE_STRUCTURE_MOCK = {
    error: 0,
    message: '',
    links: []
};

export const BAD_REQUEST_STRUCTURE_MOCK = {
    error: 0,
    message: ''
};
