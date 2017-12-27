import {
    BAD_REQUEST_STRUCTURE_MOCK,
    INVALID_RESPONSE_STRUCTURE_MOCK
} from './dummy_data';

const artist = require('../artist');
const auth = require('../auth');
const {
    convertDataToMock,
    ARTIST_VALID_MOCKS,
    ARTIST_DATA_EXAMPLES
} = require('./dummy_data');
const config = require('../../../config');

describe('getCorrection method', () => {
    it('Should return valid response if passed data is valid', () => {
        expect.assertions(1);
        return artist.getCorrection('Breking benjamin').then(res => {
            return expect(convertDataToMock(res)).toEqual(
                ARTIST_VALID_MOCKS.correction
            );
        });
    });

    it('Should return empty response if passed data is valid but correction not found', () => {
        expect.assertions(1);
        return artist.getCorrection('Broeking benjamin').then(res => {
            return expect(convertDataToMock(res)).toEqual(
                ARTIST_VALID_MOCKS.correction_empty
            );
        });
    });
});

describe('getInfo method', () => {
    it('Should return valid response if passed data is valid', () => {
        expect.assertions(1);
        return artist
            .getInfo(ARTIST_DATA_EXAMPLES.valid.artist)
            .then(res =>
                expect(convertDataToMock(res)).toEqual(
                    ARTIST_VALID_MOCKS.artist
                )
            );
    });

    it('Should return empty response if passed data is invalid', () => {
        expect.assertions(1);
        return artist
            .getInfo(ARTIST_DATA_EXAMPLES.invalid.artist)
            .then(res =>
                expect(convertDataToMock(res)).toEqual(
                    ARTIST_VALID_MOCKS.artist_empty
                )
            );
    });
});

describe('getInfoByMbid method', () => {
    it('Should return valid response if passed data is valid', () => {
        expect.assertions(1);
        return artist
            .getInfoByMbid(ARTIST_DATA_EXAMPLES.valid.mbid)
            .then(res =>
                expect(convertDataToMock(res)).toEqual(
                    ARTIST_VALID_MOCKS.artist
                )
            );
    });

    it('Should return empty response if passed data is invalid', () => {
        expect.assertions(1);
        return artist
            .getInfoByMbid(ARTIST_DATA_EXAMPLES.invalid.mbid)
            .catch(err =>
                expect(convertDataToMock(err)).toEqual(
                    INVALID_RESPONSE_STRUCTURE_MOCK
                )
            );
    });
});

describe('getSimilar method', () => {
    it('Should return valid response if passed data is valid', () => {
        expect.assertions(1);
        return artist
            .getSimilar(ARTIST_DATA_EXAMPLES.valid.artist)
            .then(res =>
                expect(convertDataToMock(res)).toEqual(
                    ARTIST_VALID_MOCKS.similar
                )
            );
    });

    it('Should return empty response if passed data is invalid', () => {
        expect.assertions(1);
        return artist
            .getSimilar(ARTIST_DATA_EXAMPLES.invalid.artist)
            .then(res =>
                expect(convertDataToMock(res)).toEqual(
                    ARTIST_VALID_MOCKS.similar
                )
            );
    });
});

describe('getSimilarByMbid method', () => {
    it('Should return valid response if passed data is valid', () => {
        expect.assertions(1);
        return artist
            .getSimilarByMbid(ARTIST_DATA_EXAMPLES.valid.mbid)
            .then(res =>
                expect(convertDataToMock(res)).toEqual(
                    ARTIST_VALID_MOCKS.similar
                )
            );
    });

    it('Should return invalid response if passed data is invalid', () => {
        // expect.assertions(1);
        return artist
            .getSimilarByMbid(ARTIST_DATA_EXAMPLES.invalid.mbid)
            .catch(err =>
                expect(convertDataToMock(err)).toEqual(
                    INVALID_RESPONSE_STRUCTURE_MOCK
                )
            );
    });
});

describe('getTagsByMbid method', () => {
    test('Should return invalid response if data is invalid', () => {
        expect.assertions(1);
        return artist
            .getTagsByMbid(ARTIST_DATA_EXAMPLES.invalid.mbid)
            .catch(err =>
                expect(convertDataToMock(err)).toEqual(
                    INVALID_RESPONSE_STRUCTURE_MOCK
                )
            );
    });

    test('Should return valid response if data is valid', () => {
        expect.assertions(1);
        return artist
            .getTagsByMbid(ARTIST_DATA_EXAMPLES.valid.mbid, {
                user: config.username
            })
            .then(res =>
                expect(convertDataToMock(res)).toEqual(ARTIST_VALID_MOCKS.tags)
            );
    });

    test('Should return invalid response if passed no args', () => {
        expect.assertions(1);
        return artist
            .getTagsByMbid()
            .catch(err =>
                expect(convertDataToMock(err)).toEqual(
                    INVALID_RESPONSE_STRUCTURE_MOCK
                )
            );
    });

    test('Should return valid response if passed valid data and user authorized', () => {
        expect.assertions(1);
        return auth
            .getMobileSession()
            .then(sessionInfo => sessionInfo.session.key)
            .then(sk =>
                artist
                    .getTagsByMbid(ARTIST_DATA_EXAMPLES.valid.mbid, { sk })
                    .then(res =>
                        expect(convertDataToMock(res)).toEqual(
                            ARTIST_VALID_MOCKS.tags
                        )
                    )
            );
    });

    test('Should return invalid response if passed api_sig to extra opts', () => {
        expect.assertions(1);
        return artist
            .getTagsByMbid(ARTIST_DATA_EXAMPLES.valid.mbid, {
                api_sig: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
            })
            .catch(err => {
                expect(convertDataToMock(err)).toEqual(
                    BAD_REQUEST_STRUCTURE_MOCK
                );
            });
    });
});

describe('getTags method', () => {
    test('Should return invalid response if data is invalid', () => {
        expect.assertions(1);
        return artist
            .getTags(ARTIST_DATA_EXAMPLES.invalid.artist)
            .catch(err =>
                expect(convertDataToMock(err)).toEqual(
                    INVALID_RESPONSE_STRUCTURE_MOCK
                )
            );
    });

    test('Should return valid response if data is valid', () => {
        expect.assertions(1);
        return artist
            .getTags(ARTIST_DATA_EXAMPLES.valid.artist, {
                user: config.username
            })
            .then(res =>
                expect(convertDataToMock(res)).toEqual(ARTIST_VALID_MOCKS.tags)
            );
    });

    test('Should return invalid response if passed no args', () => {
        expect.assertions(1);
        return artist
            .getTags()
            .catch(err =>
                expect(convertDataToMock(err)).toEqual(
                    INVALID_RESPONSE_STRUCTURE_MOCK
                )
            );
    });

    test('Should return valid response if passed valid data and user authorized', () => {
        expect.assertions(1);
        return auth
            .getMobileSession()
            .then(sessionInfo => sessionInfo.session.key)
            .then(sk =>
                artist
                    .getTags(ARTIST_DATA_EXAMPLES.valid.artist, {
                        sk
                    })
                    .then(res =>
                        expect(convertDataToMock(res)).toEqual(
                            ARTIST_VALID_MOCKS.tags
                        )
                    )
            );
    });

    test('Should return invalid response if passed api_sig to extra opts', () => {
        expect.assertions(1);
        return artist
            .getTags(ARTIST_DATA_EXAMPLES.valid.artist, {
                api_sig: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
            })
            .catch(err => {
                expect(convertDataToMock(err)).toEqual(
                    BAD_REQUEST_STRUCTURE_MOCK
                );
            });
    });
});

describe('getTopTagsByMbid method', () => {
    test('Should return invalid response if data is invalid', () => {
        expect.assertions(1);
        return artist
            .getTopTagsByMbid(ARTIST_DATA_EXAMPLES.invalid.mbid)
            .catch(err =>
                expect(convertDataToMock(err)).toEqual(
                    INVALID_RESPONSE_STRUCTURE_MOCK
                )
            );
    });

    test('Should return valid response if data is valid', () => {
        expect.assertions(1);
        return artist
            .getTopTagsByMbid(ARTIST_DATA_EXAMPLES.valid.mbid, {
                user: config.username
            })
            .then(res =>
                expect(convertDataToMock(res)).toEqual(
                    ARTIST_VALID_MOCKS.toptags
                )
            );
    });

    test('Should return invalid response if passed no args', () => {
        expect.assertions(1);
        return artist
            .getTopTagsByMbid()
            .catch(err =>
                expect(convertDataToMock(err)).toEqual(
                    INVALID_RESPONSE_STRUCTURE_MOCK
                )
            );
    });

    test('Should return valid response if passed valid data and user authorized', () => {
        expect.assertions(1);
        return auth
            .getMobileSession()
            .then(sessionInfo => sessionInfo.session.key)
            .then(sk =>
                artist
                    .getTopTagsByMbid(ARTIST_DATA_EXAMPLES.valid.mbid, { sk })
                    .then(res =>
                        expect(convertDataToMock(res)).toEqual(
                            ARTIST_VALID_MOCKS.toptags
                        )
                    )
            );
    });

    test('Should return invalid response if passed api_sig to extra opts', () => {
        expect.assertions(1);
        return artist
            .getTopTagsByMbid(ARTIST_DATA_EXAMPLES.valid.mbid, {
                api_sig: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
            })
            .catch(err => {
                expect(convertDataToMock(err)).toEqual(
                    BAD_REQUEST_STRUCTURE_MOCK
                );
            });
    });
});

describe('getTopTags method', () => {
    test('Should return invalid response if data is invalid', () => {
        expect.assertions(1);
        return artist
            .getTopTags(ARTIST_DATA_EXAMPLES.invalid.artist)
            .then(res =>
                expect(convertDataToMock(res)).toEqual(
                    ARTIST_VALID_MOCKS.toptags
                )
            );
    });

    test('Should return valid response if data is valid', () => {
        expect.assertions(1);
        return artist
            .getTopTags(ARTIST_DATA_EXAMPLES.valid.artist, {
                user: config.username
            })
            .then(res =>
                expect(convertDataToMock(res)).toEqual(
                    ARTIST_VALID_MOCKS.toptags
                )
            );
    });

    test('Should return invalid response if passed no args', () => {
        expect.assertions(1);
        return artist
            .getTopTags()
            .catch(err =>
                expect(convertDataToMock(err)).toEqual(
                    INVALID_RESPONSE_STRUCTURE_MOCK
                )
            );
    });

    test('Should return valid response if passed valid data and user authorized', () => {
        expect.assertions(1);
        return auth
            .getMobileSession()
            .then(sessionInfo => sessionInfo.session.key)
            .then(sk =>
                artist
                    .getTopTags(ARTIST_DATA_EXAMPLES.valid.artist, {
                        sk
                    })
                    .then(res =>
                        expect(convertDataToMock(res)).toEqual(
                            ARTIST_VALID_MOCKS.toptags
                        )
                    )
            );
    });

    test('Should return invalid response if passed api_sig to extra opts', () => {
        expect.assertions(1);
        return artist
            .getTopTags(ARTIST_DATA_EXAMPLES.valid.artist, {
                api_sig: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
            })
            .catch(err => {
                expect(convertDataToMock(err)).toEqual(
                    BAD_REQUEST_STRUCTURE_MOCK
                );
            });
    });
});

describe('getTopAlbumsByMbid method', () => {
    test('Should return invalid response if data is invalid', () => {
        expect.assertions(1);
        return artist
            .getTopAlbumsByMbid(ARTIST_DATA_EXAMPLES.invalid.mbid)
            .catch(err =>
                expect(convertDataToMock(err)).toEqual(
                    INVALID_RESPONSE_STRUCTURE_MOCK
                )
            );
    });

    test('Should return valid response if data is valid', () => {
        expect.assertions(1);
        return artist
            .getTopAlbumsByMbid(ARTIST_DATA_EXAMPLES.valid.mbid, {
                user: config.username
            })
            .then(res =>
                expect(convertDataToMock(res)).toEqual(
                    ARTIST_VALID_MOCKS.topalbums
                )
            );
    });

    test('Should return invalid response if passed no args', () => {
        expect.assertions(1);
        return artist
            .getTopAlbumsByMbid()
            .catch(err =>
                expect(convertDataToMock(err)).toEqual(
                    INVALID_RESPONSE_STRUCTURE_MOCK
                )
            );
    });

    test('Should return valid response if passed valid data and user authorized', () => {
        expect.assertions(1);
        return auth
            .getMobileSession()
            .then(sessionInfo => sessionInfo.session.key)
            .then(sk =>
                artist
                    .getTopAlbumsByMbid(ARTIST_DATA_EXAMPLES.valid.mbid, { sk })
                    .then(res =>
                        expect(convertDataToMock(res)).toEqual(
                            ARTIST_VALID_MOCKS.topalbums
                        )
                    )
            );
    });

    test('Should return invalid response if passed api_sig to extra opts', () => {
        expect.assertions(1);
        return artist
            .getTopAlbumsByMbid(ARTIST_DATA_EXAMPLES.valid.mbid, {
                api_sig: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
            })
            .catch(err => {
                expect(convertDataToMock(err)).toEqual(
                    BAD_REQUEST_STRUCTURE_MOCK
                );
            });
    });
});

describe('getTopAlbums method', () => {
    test('Should return invalid response if data is invalid', () => {
        expect.assertions(1);
        return artist
            .getTopAlbums(ARTIST_DATA_EXAMPLES.invalid.artist)
            .then(res =>
                expect(convertDataToMock(res)).toEqual(
                    ARTIST_VALID_MOCKS.topalbums
                )
            );
    });

    test('Should return valid response if data is valid', () => {
        expect.assertions(1);
        return artist
            .getTopAlbums(ARTIST_DATA_EXAMPLES.valid.artist, {
                user: config.username
            })
            .then(res =>
                expect(convertDataToMock(res)).toEqual(
                    ARTIST_VALID_MOCKS.topalbums
                )
            );
    });

    test('Should return invalid response if passed no args', () => {
        expect.assertions(1);
        return artist
            .getTopAlbums()
            .catch(err =>
                expect(convertDataToMock(err)).toEqual(
                    INVALID_RESPONSE_STRUCTURE_MOCK
                )
            );
    });

    test('Should return valid response if passed valid data and user authorized', () => {
        expect.assertions(1);
        return auth
            .getMobileSession()
            .then(sessionInfo => sessionInfo.session.key)
            .then(sk =>
                artist
                    .getTopAlbums(ARTIST_DATA_EXAMPLES.valid.artist, {
                        sk
                    })
                    .then(res =>
                        expect(convertDataToMock(res)).toEqual(
                            ARTIST_VALID_MOCKS.topalbums
                        )
                    )
            );
    });

    test('Should return invalid response if passed api_sig to extra opts', () => {
        expect.assertions(1);
        return artist
            .getTopAlbums(ARTIST_DATA_EXAMPLES.valid.artist, {
                api_sig: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
            })
            .catch(err => {
                expect(convertDataToMock(err)).toEqual(
                    BAD_REQUEST_STRUCTURE_MOCK
                );
            });
    });
});

describe('getTopTracksByMbid method', () => {
    test('Should return invalid response if data is invalid', () => {
        expect.assertions(1);
        return artist
            .getTopTracksByMbid(ARTIST_DATA_EXAMPLES.invalid.mbid)
            .catch(err =>
                expect(convertDataToMock(err)).toEqual(
                    INVALID_RESPONSE_STRUCTURE_MOCK
                )
            );
    });

    test('Should return valid response if data is valid', () => {
        expect.assertions(1);
        return artist
            .getTopTracksByMbid(ARTIST_DATA_EXAMPLES.valid.mbid, {
                user: config.username
            })
            .then(res =>
                expect(convertDataToMock(res)).toEqual(
                    ARTIST_VALID_MOCKS.toptracks
                )
            );
    });

    test('Should return invalid response if passed no args', () => {
        expect.assertions(1);
        return artist
            .getTopTracksByMbid()
            .catch(err =>
                expect(convertDataToMock(err)).toEqual(
                    INVALID_RESPONSE_STRUCTURE_MOCK
                )
            );
    });

    test('Should return valid response if passed valid data and user authorized', () => {
        expect.assertions(1);
        return auth
            .getMobileSession()
            .then(sessionInfo => sessionInfo.session.key)
            .then(sk =>
                artist
                    .getTopTracksByMbid(ARTIST_DATA_EXAMPLES.valid.mbid, { sk })
                    .then(res =>
                        expect(convertDataToMock(res)).toEqual(
                            ARTIST_VALID_MOCKS.toptracks
                        )
                    )
            );
    });

    test('Should return invalid response if passed api_sig to extra opts', () => {
        expect.assertions(1);
        return artist
            .getTopTracksByMbid(ARTIST_DATA_EXAMPLES.valid.mbid, {
                api_sig: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
            })
            .catch(err => {
                expect(convertDataToMock(err)).toEqual(
                    BAD_REQUEST_STRUCTURE_MOCK
                );
            });
    });
});

describe('getTopTracks method', () => {
    test('Should return invalid response if data is invalid', () => {
        expect.assertions(1);
        return artist
            .getTopTracks(ARTIST_DATA_EXAMPLES.invalid.artist)
            .then(res =>
                expect(convertDataToMock(res)).toEqual(
                    ARTIST_VALID_MOCKS.toptracks
                )
            );
    });

    test('Should return valid response if data is valid', () => {
        expect.assertions(1);
        return artist
            .getTopTracks(ARTIST_DATA_EXAMPLES.valid.artist, {
                user: config.username
            })
            .then(res =>
                expect(convertDataToMock(res)).toEqual(
                    ARTIST_VALID_MOCKS.toptracks
                )
            );
    });

    test('Should return invalid response if passed no args', () => {
        expect.assertions(1);
        return artist
            .getTopTracks()
            .catch(err =>
                expect(convertDataToMock(err)).toEqual(
                    INVALID_RESPONSE_STRUCTURE_MOCK
                )
            );
    });

    test('Should return valid response if passed valid data and user authorized', () => {
        expect.assertions(1);
        return auth
            .getMobileSession()
            .then(sessionInfo => sessionInfo.session.key)
            .then(sk =>
                artist
                    .getTopTracks(ARTIST_DATA_EXAMPLES.valid.artist, {
                        sk
                    })
                    .then(res =>
                        expect(convertDataToMock(res)).toEqual(
                            ARTIST_VALID_MOCKS.toptracks
                        )
                    )
            );
    });

    test('Should return invalid response if passed api_sig to extra opts', () => {
        expect.assertions(1);
        return artist
            .getTopTracks(ARTIST_DATA_EXAMPLES.valid.artist, {
                api_sig: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
            })
            .catch(err => {
                expect(convertDataToMock(err)).toEqual(
                    BAD_REQUEST_STRUCTURE_MOCK
                );
            });
    });
});

describe('search method', () => {
    test('Should return valid response if passed valid data', () => {
        expect.assertions(1);
        return artist
            .search(ARTIST_DATA_EXAMPLES.valid.artist)
            .then(res =>
                expect(convertDataToMock(res)).toEqual(
                    ARTIST_VALID_MOCKS.search
                )
            );
    });

    test('Should return valid response with respect to limit if passed valid data and offset', () => {
        expect.assertions(1);
        const limit = 10;
        return artist
            .search(ARTIST_DATA_EXAMPLES.valid.artist, { limit })
            .then(
                res =>
                    Number(res.results['opensearch:itemsPerPage']) === limit &&
                    expect(convertDataToMock(res)).toEqual(
                        ARTIST_VALID_MOCKS.search
                    )
            );
    });

    test('Should return valid response with respect to limit if passed valid data and page', () => {
        expect.assertions(1);
        const page = 2;
        return artist
            .search(ARTIST_DATA_EXAMPLES.valid.artist, { page })
            .then(
                res =>
                    Number(res.results['opensearch:Query']['startPage']) ===
                        page &&
                    expect(convertDataToMock(res)).toEqual(
                        ARTIST_VALID_MOCKS.search
                    )
            );
    });
});

describe('addTags method', () => {
    test('Should return valid response if passed valid data', () => {
        expect.assertions(1);
        return auth
            .getMobileSession()
            .then(sessionInfo => sessionInfo.session)
            .then(session => session.key)
            .then(sk =>
                artist
                    .addTags(
                        ARTIST_DATA_EXAMPLES.valid.artist,
                        'love, rock, alternative, bb',
                        sk
                    )
                    .then(res => expect(convertDataToMock(res)).toEqual({}))
            );
    });

    test('Should return invalid response if user is not authorized', () => {
        expect.assertions(1);
        return artist
            .addTags(
                ARTIST_DATA_EXAMPLES.valid.artist,
                'love, rock, alternative, bb',
                'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
            )
            .catch(err =>
                expect(convertDataToMock(err)).toEqual(
                    BAD_REQUEST_STRUCTURE_MOCK
                )
            );
    });
});
