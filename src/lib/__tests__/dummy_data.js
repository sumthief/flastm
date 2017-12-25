export const VALID_EXAMPLES = {
    artist: 'breaking benjamin',
    album: 'phobia',
    mbid: '326936d7-feec-48d5-bb9f-286552c1f804'
};

export const INVALID_EXAMPLES = {
    artist: 'broaking benjamin',
    album: 'phobia',
    mbid: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'
};

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

export const ALBUM_VALID_STRUCTURE_MOCK = {
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

export const ALBUM_INVALID_STRUCTURE_MOCK = {
    error: 0,
    message: '',
    links: []
};
