import { BAD_REQUEST_STRUCTURE_MOCK } from './dummy_data';

const album = require('../album');
const auth = require('../auth');
const config = require('../../../config');
const {
    VALID_EXAMPLES,
    INVALID_EXAMPLES,
    INVALID_RESPONSE_STRUCTURE_MOCK,
    ALBUM_VALID_MOCKS,
    convertDataToMock
} = require('./dummy_data');

describe('getInfo method', () => {
    test('Should return invalid response if data is invalid', () => {
        expect.assertions(1);
        return album
            .getInfo(INVALID_EXAMPLES.artist, INVALID_EXAMPLES.album)
            .catch(err =>
                expect(convertDataToMock(err)).toEqual(
                    INVALID_RESPONSE_STRUCTURE_MOCK
                )
            );
    });

    test('Should return valid response if data is valid', () => {
        expect.assertions(1);
        return album
            .getInfo(VALID_EXAMPLES.artist, VALID_EXAMPLES.album)
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
            .getInfo(VALID_EXAMPLES.artist, VALID_EXAMPLES.album, {
                nonExistingApiKey: 'extra'
            })
            .then(res =>
                expect(convertDataToMock(res)).toEqual(ALBUM_VALID_MOCKS.album)
            );
    });

    test('Should return invalid response if passed api_sig to extra opts', () => {
        expect.assertions(1);
        return album
            .getInfo(VALID_EXAMPLES.artist, VALID_EXAMPLES.album, {
                api_sig: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
            })
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
            .getInfoByMbid(INVALID_EXAMPLES.mbid)
            .catch(err =>
                expect(convertDataToMock(err)).toEqual(
                    INVALID_RESPONSE_STRUCTURE_MOCK
                )
            );
    });

    test('Should return valid response if data is valid', () => {
        expect.assertions(1);
        return album
            .getInfoByMbid(VALID_EXAMPLES.mbid)
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
            .getInfoByMbid(VALID_EXAMPLES.mbid, {
                nonExistingApiKey: 'extra'
            })
            .then(res =>
                expect(convertDataToMock(res)).toEqual(ALBUM_VALID_MOCKS.album)
            );
    });

    test('Should return invalid response if passed api_sig to extra opts', () => {
        expect.assertions(1);
        return album
            .getInfoByMbid(VALID_EXAMPLES.mbid, {
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
            .getTagsByMbid(INVALID_EXAMPLES.mbid)
            .catch(err =>
                expect(convertDataToMock(err)).toEqual(
                    INVALID_RESPONSE_STRUCTURE_MOCK
                )
            );
    });

    test('Should return valid response if data is valid', () => {
        expect.assertions(1);
        return album
            .getTagsByMbid(VALID_EXAMPLES.mbid, { user: config.username })
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
                    .getTagsByMbid(VALID_EXAMPLES.mbid, { sk })
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
            .getTagsByMbid(VALID_EXAMPLES.mbid, {
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
            .getTags(INVALID_EXAMPLES.artist, INVALID_EXAMPLES.album)
            .catch(err =>
                expect(convertDataToMock(err)).toEqual(
                    INVALID_RESPONSE_STRUCTURE_MOCK
                )
            );
    });

    test('Should return valid response if data is valid', () => {
        expect.assertions(1);
        return album
            .getTags(VALID_EXAMPLES.artist, VALID_EXAMPLES.album, {
                user: config.username
            })
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
                    .getTags(VALID_EXAMPLES.artist, VALID_EXAMPLES.album, {
                        sk
                    })
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
            .getTags(VALID_EXAMPLES.artist, VALID_EXAMPLES.album, {
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
        return album
            .search(VALID_EXAMPLES.album)
            .then(res =>
                expect(convertDataToMock(res)).toEqual(ALBUM_VALID_MOCKS.search)
            );
    });

    test('Should return valid response with respect to limit if passed valid data and offset', () => {
        expect.assertions(1);
        const limit = 10;
        return album
            .search(VALID_EXAMPLES.album, { limit })
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
            .search(VALID_EXAMPLES.album, { page })
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
                        VALID_EXAMPLES.artist,
                        VALID_EXAMPLES.album,
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
                VALID_EXAMPLES.artist,
                VALID_EXAMPLES.album,
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
                        VALID_EXAMPLES.artist,
                        VALID_EXAMPLES.album,
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
                VALID_EXAMPLES.artist,
                VALID_EXAMPLES.album,
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
