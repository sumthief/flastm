const album = require('../album');
const auth = require('../auth');
const config = require('../../../config');
const {
    BAD_REQUEST_STRUCTURE_MOCK,
    INVALID_RESPONSE_STRUCTURE_MOCK,
    ALBUM_VALID_MOCKS,
    ALBUM_DATA_EXAMPLES,
    convertDataToMock
} = require('./dummy_data');

describe('getInfo method', () => {
    test('Should return invalid response if data is invalid', () => {
        expect.assertions(1);
        return album
            .getInfo(
                ALBUM_DATA_EXAMPLES.invalid.artist,
                ALBUM_DATA_EXAMPLES.invalid.album
            )
            .catch(err =>
                expect(convertDataToMock(err)).toEqual(
                    INVALID_RESPONSE_STRUCTURE_MOCK
                )
            );
    });

    test('Should return valid response if data is valid', () => {
        expect.assertions(1);
        return album
            .getInfo(
                ALBUM_DATA_EXAMPLES.valid.artist,
                ALBUM_DATA_EXAMPLES.valid.album
            )
            .then(res =>
                expect(convertDataToMock(res)).toEqual(ALBUM_VALID_MOCKS.album)
            );
    });

    test('Should return invalid response if passed no args', () => {
        expect.assertions(1);
        return album
            .getInfo()
            .catch(err =>
                expect(convertDataToMock(err)).toEqual(
                    INVALID_RESPONSE_STRUCTURE_MOCK
                )
            );
    });

    test('Should return valid response if passed unknown extra opts', () => {
        expect.assertions(1);
        return album
            .getInfo(
                ALBUM_DATA_EXAMPLES.valid.artist,
                ALBUM_DATA_EXAMPLES.valid.album,
                {
                    nonExistingApiKey: 'extra'
                }
            )
            .then(res =>
                expect(convertDataToMock(res)).toEqual(ALBUM_VALID_MOCKS.album)
            );
    });

    test('Should return invalid response if passed api_sig to extra opts', () => {
        expect.assertions(1);
        return album
            .getInfo(
                ALBUM_DATA_EXAMPLES.valid.artist,
                ALBUM_DATA_EXAMPLES.valid.album,
                {
                    api_sig: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
                }
            )
            .catch(err => {
                expect(convertDataToMock(err)).toEqual(
                    BAD_REQUEST_STRUCTURE_MOCK
                );
            });
    });
});

describe('getInfoByMbid method', () => {
    test('Should return invalid response if data is invalid', () => {
        expect.assertions(1);
        return album
            .getInfoByMbid(ALBUM_DATA_EXAMPLES.invalid.mbid)
            .catch(err =>
                expect(convertDataToMock(err)).toEqual(
                    INVALID_RESPONSE_STRUCTURE_MOCK
                )
            );
    });

    test('Should return valid response if data is valid', () => {
        expect.assertions(1);
        return album
            .getInfoByMbid(ALBUM_DATA_EXAMPLES.valid.mbid)
            .then(res =>
                expect(convertDataToMock(res)).toEqual(ALBUM_VALID_MOCKS.album)
            );
    });

    test('Should return invalid response if passed no args', () => {
        expect.assertions(1);
        return album
            .getInfoByMbid()
            .catch(err =>
                expect(convertDataToMock(err)).toEqual(
                    INVALID_RESPONSE_STRUCTURE_MOCK
                )
            );
    });

    test('Should return valid response if passed unknown extra opts', () => {
        expect.assertions(1);
        return album
            .getInfoByMbid(ALBUM_DATA_EXAMPLES.valid.mbid, {
                nonExistingApiKey: 'extra'
            })
            .then(res =>
                expect(convertDataToMock(res)).toEqual(ALBUM_VALID_MOCKS.album)
            );
    });

    test('Should return invalid response if passed api_sig to extra opts', () => {
        expect.assertions(1);
        return album
            .getInfoByMbid(ALBUM_DATA_EXAMPLES.valid.mbid, {
                api_sig: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
            })
            .catch(err => {
                expect(convertDataToMock(err)).toEqual(
                    BAD_REQUEST_STRUCTURE_MOCK
                );
            });
    });
});

describe('getTagsByMbid method', () => {
    test('Should return invalid response if data is invalid', () => {
        expect.assertions(1);
        return album
            .getTagsByMbid(ALBUM_DATA_EXAMPLES.invalid.mbid)
            .catch(err =>
                expect(convertDataToMock(err)).toEqual(
                    INVALID_RESPONSE_STRUCTURE_MOCK
                )
            );
    });

    test('Should return valid response if data is valid', () => {
        expect.assertions(1);
        return album
            .getTagsByMbid(ALBUM_DATA_EXAMPLES.valid.mbid, {
                user: config.username
            })
            .then(res =>
                expect(convertDataToMock(res)).toEqual(ALBUM_VALID_MOCKS.tags)
            );
    });

    test('Should return invalid response if passed no args', () => {
        expect.assertions(1);
        return album
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
                album
                    .getTagsByMbid(ALBUM_DATA_EXAMPLES.valid.mbid, { sk })
                    .then(res =>
                        expect(convertDataToMock(res)).toEqual(
                            ALBUM_VALID_MOCKS.tags
                        )
                    )
            );
    });

    test('Should return invalid response if passed api_sig to extra opts', () => {
        expect.assertions(1);
        return album
            .getTagsByMbid(ALBUM_DATA_EXAMPLES.valid.mbid, {
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
        return album
            .getTags(
                ALBUM_DATA_EXAMPLES.invalid.artist,
                ALBUM_DATA_EXAMPLES.invalid.album
            )
            .catch(err =>
                expect(convertDataToMock(err)).toEqual(
                    INVALID_RESPONSE_STRUCTURE_MOCK
                )
            );
    });

    test('Should return valid response if data is valid', () => {
        expect.assertions(1);
        return album
            .getTags(
                ALBUM_DATA_EXAMPLES.valid.artist,
                ALBUM_DATA_EXAMPLES.valid.album,
                {
                    user: config.username
                }
            )
            .then(res =>
                expect(convertDataToMock(res)).toEqual(ALBUM_VALID_MOCKS.tags)
            );
    });

    test('Should return invalid response if passed no args', () => {
        expect.assertions(1);
        return album
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
                album
                    .getTags(
                        ALBUM_DATA_EXAMPLES.valid.artist,
                        ALBUM_DATA_EXAMPLES.valid.album,
                        {
                            sk
                        }
                    )
                    .then(res =>
                        expect(convertDataToMock(res)).toEqual(
                            ALBUM_VALID_MOCKS.tags
                        )
                    )
            );
    });

    test('Should return invalid response if passed api_sig to extra opts', () => {
        expect.assertions(1);
        return album
            .getTags(
                ALBUM_DATA_EXAMPLES.valid.artist,
                ALBUM_DATA_EXAMPLES.valid.album,
                {
                    api_sig: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
                }
            )
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
        return album
            .search(ALBUM_DATA_EXAMPLES.valid.album)
            .then(res =>
                expect(convertDataToMock(res)).toEqual(ALBUM_VALID_MOCKS.search)
            );
    });

    test('Should return valid response with respect to limit if passed valid data and offset', () => {
        expect.assertions(1);
        const limit = 10;
        return album
            .search(ALBUM_DATA_EXAMPLES.valid.album, { limit })
            .then(
                res =>
                    Number(res.results['opensearch:itemsPerPage']) === limit &&
                    expect(convertDataToMock(res)).toEqual(
                        ALBUM_VALID_MOCKS.search
                    )
            );
    });

    test('Should return valid response with respect to limit if passed valid data and page', () => {
        expect.assertions(1);
        const page = 2;
        return album
            .search(ALBUM_DATA_EXAMPLES.valid.album, { page })
            .then(
                res =>
                    Number(res.results['opensearch:Query']['startPage']) ===
                        page &&
                    expect(convertDataToMock(res)).toEqual(
                        ALBUM_VALID_MOCKS.search
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
                album
                    .addTags(
                        ALBUM_DATA_EXAMPLES.valid.artist,
                        ALBUM_DATA_EXAMPLES.valid.album,
                        'love, rock, alternative, bb',
                        sk
                    )
                    .then(res => expect(convertDataToMock(res)).toEqual({}))
            );
    });

    test('Should return invalid response if user is not authorized', () => {
        expect.assertions(1);
        return album
            .addTags(
                ALBUM_DATA_EXAMPLES.valid.artist,
                ALBUM_DATA_EXAMPLES.valid.album,
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

describe('removeTag method', () => {
    test('Should return valid response if passed valid data', () => {
        expect.assertions(1);
        return auth
            .getMobileSession()
            .then(sessionInfo => sessionInfo.session)
            .then(session => session.key)
            .then(sk =>
                album
                    .removeTag(
                        ALBUM_DATA_EXAMPLES.valid.artist,
                        ALBUM_DATA_EXAMPLES.valid.album,
                        'rock',
                        sk
                    )
                    .then(res => expect(convertDataToMock(res)).toEqual({}))
            );
    });

    test('Should return invalid response if user is not authorized', () => {
        expect.assertions(1);
        return album
            .removeTag(
                ALBUM_DATA_EXAMPLES.valid.artist,
                ALBUM_DATA_EXAMPLES.valid.album,
                'love',
                'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
            )
            .catch(err =>
                expect(convertDataToMock(err)).toEqual(
                    BAD_REQUEST_STRUCTURE_MOCK
                )
            );
    });
});
