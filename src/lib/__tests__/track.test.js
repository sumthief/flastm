import {
    convertDataToMock,
    TRACK_VALID_MOCKS,
    TRACK_DATA_EXAMPLES,
    INVALID_RESPONSE_STRUCTURE_MOCK
} from './dummy_data';

const track = require('../track');
const auth = require('../auth');

const { username } = require('../../../config');

describe('getCorrection method', () => {
    test('Should return valid response', () => {
        expect.assertions(1);
        return track
            .getCorrection(
                TRACK_DATA_EXAMPLES.invalid.artist,
                TRACK_DATA_EXAMPLES.invalid.track
            )
            .then(res =>
                expect(convertDataToMock(res)).toEqual(
                    TRACK_VALID_MOCKS.correction
                )
            );
    });
});

describe('getInfo method', () => {
    test('Should return valid response if passed valid data', () => {
        expect.assertions(1);
        return track
            .getInfo(
                TRACK_DATA_EXAMPLES.valid.artist,
                TRACK_DATA_EXAMPLES.valid.track
            )
            .then(res =>
                expect(convertDataToMock(res)).toEqual(TRACK_VALID_MOCKS.track)
            );
    });

    test('Should return invalid response if passed invalid data', () => {
        expect.assertions(1);
        return track
            .getInfo(
                TRACK_DATA_EXAMPLES.invalid.artist,
                TRACK_DATA_EXAMPLES.invalid.track
            )
            .catch(err =>
                expect(convertDataToMock(err)).toEqual(
                    INVALID_RESPONSE_STRUCTURE_MOCK
                )
            );
    });
});

describe('getInfoByMbid method', () => {
    test('Should return valid response if passed valid data', () => {
        expect.assertions(1);
        return track
            .getInfoByMbid(TRACK_DATA_EXAMPLES.valid.mbid)
            .then(res =>
                expect(convertDataToMock(res)).toEqual(TRACK_VALID_MOCKS.track)
            );
    });

    test('Should return invalid response if passed invalid data', () => {
        expect.assertions(1);
        return track
            .getInfoByMbid(TRACK_DATA_EXAMPLES.invalid.mbid)
            .catch(err =>
                expect(convertDataToMock(err)).toEqual(
                    INVALID_RESPONSE_STRUCTURE_MOCK
                )
            );
    });
});

describe('getSimilar method', () => {
    test('Should return valid response if passed valid data', () => {
        expect.assertions(1);
        return track
            .getSimilar(
                TRACK_DATA_EXAMPLES.valid.artist,
                TRACK_DATA_EXAMPLES.valid.track
            )
            .then(res =>
                expect(convertDataToMock(res)).toEqual(
                    TRACK_VALID_MOCKS.similar
                )
            );
    });

    test('Should return invalid response if passed invalid data', () => {
        expect.assertions(1);
        return track
            .getSimilar(
                TRACK_DATA_EXAMPLES.invalid.artist,
                TRACK_DATA_EXAMPLES.invalid.track
            )
            .catch(err =>
                expect(convertDataToMock(err)).toEqual(
                    INVALID_RESPONSE_STRUCTURE_MOCK
                )
            );
    });
});

describe('getSimilarByMbid method', () => {
    test('Should return valid response if passed valid data', () => {
        expect.assertions(1);
        return track
            .getSimilarByMbid(TRACK_DATA_EXAMPLES.valid.mbid)
            .then(res =>
                expect(convertDataToMock(res)).toEqual(
                    TRACK_VALID_MOCKS.similar
                )
            );
    });

    test('Should return empty response if passed invalid data', () => {
        expect.assertions(1);
        return track
            .getSimilarByMbid(TRACK_DATA_EXAMPLES.invalid.mbid)
            .then(err => expect(convertDataToMock(err)).toEqual({}));
    });
});

describe('getTags method', () => {
    test('Should return valid response if passed valid data (user is not authorized)', () => {
        expect.assertions(1);
        return track
            .getTags(
                TRACK_DATA_EXAMPLES.valid.artist,
                TRACK_DATA_EXAMPLES.valid.track,
                { username }
            )
            .then(res =>
                expect(convertDataToMock(res)).toEqual(TRACK_VALID_MOCKS.tags)
            );
    });

    test('Should return valid response if passed valid data (user is authorized)', () => {
        expect.assertions(1);
        return auth
            .getMobileSession()
            .then(sessionInfo => sessionInfo.session.key)
            .then(sk =>
                track
                    .getTags(
                        TRACK_DATA_EXAMPLES.valid.artist,
                        TRACK_DATA_EXAMPLES.valid.track,
                        { sk }
                    )
                    .then(res =>
                        expect(convertDataToMock(res)).toEqual(
                            TRACK_VALID_MOCKS.tags
                        )
                    )
            );
    });
});

describe('getTagsByMbid method', () => {
    test('Should return valid response if passed valid data (user is not authorized)', () => {
        expect.assertions(1);
        return track
            .getTagsByMbid(TRACK_DATA_EXAMPLES.valid.mbid, { username })
            .then(res =>
                expect(convertDataToMock(res)).toEqual(TRACK_VALID_MOCKS.tags)
            );
    });

    test('Should return valid response if passed valid data (user is authorized)', () => {
        expect.assertions(1);
        return auth
            .getMobileSession()
            .then(sessionInfo => sessionInfo.session.key)
            .then(sk =>
                track
                    .getTagsByMbid(TRACK_DATA_EXAMPLES.valid.mbid, { sk })
                    .then(res =>
                        expect(convertDataToMock(res)).toEqual(
                            TRACK_VALID_MOCKS.tags
                        )
                    )
            );
    });
});

describe('getTopTags method', () => {
    test('Should return valid response if passed valid data', () => {
        expect.assertions(1);
        return track
            .getTopTags(
                TRACK_DATA_EXAMPLES.valid.artist,
                TRACK_DATA_EXAMPLES.valid.track
            )
            .then(res =>
                expect(convertDataToMock(res)).toEqual(
                    TRACK_VALID_MOCKS.toptags
                )
            );
    });

    test('Should return invalid response if passed invalid data', () => {
        expect.assertions(1);
        return track
            .getTopTags(
                TRACK_DATA_EXAMPLES.invalid.artist,
                TRACK_DATA_EXAMPLES.invalid.track
            )
            .catch(err =>
                expect(convertDataToMock(err)).toEqual(
                    INVALID_RESPONSE_STRUCTURE_MOCK
                )
            );
    });
});

describe('getTopTagsByMbid method', () => {
    test('Should return valid response if passed valid data', () => {
        expect.assertions(1);
        return track
            .getTopTagsByMbid(TRACK_DATA_EXAMPLES.valid.mbid)
            .then(res =>
                expect(convertDataToMock(res)).toEqual(
                    TRACK_VALID_MOCKS.toptags
                )
            );
    });

    test('Should return empty response if passed invalid data', () => {
        expect.assertions(1);
        return track
            .getTopTagsByMbid(TRACK_DATA_EXAMPLES.invalid.mbid)
            .catch(err => expect(convertDataToMock(err)).toEqual({}));
    });
});

describe('addTags method', () => {
    test('Should return valid response', () => {
        expect.assertions(1);
        return auth
            .getMobileSession()
            .then(sessionInfo => sessionInfo.session.key)
            .then(sk =>
                track
                    .addTags(
                        TRACK_DATA_EXAMPLES.valid.artist,
                        TRACK_DATA_EXAMPLES.valid.track,
                        'love',
                        sk
                    )
                    .then(res => expect(res).toEqual({}))
            );
    });
});

describe('removeTag method', () => {
    test('Should return valid response', () => {
        expect.assertions(1);
        return auth
            .getMobileSession()
            .then(sessionInfo => sessionInfo.session.key)
            .then(sk =>
                track
                    .removeTag(
                        TRACK_DATA_EXAMPLES.valid.artist,
                        TRACK_DATA_EXAMPLES.valid.track,
                        'love',
                        sk
                    )
                    .then(res => expect(res).toEqual({}))
            );
    });
});

describe('search method', () => {
    test('Should return valid response if passed valid data', () => {
        expect.assertions(1);
        return track
            .search(TRACK_DATA_EXAMPLES.valid.track)
            .then(res =>
                expect(convertDataToMock(res)).toEqual(TRACK_VALID_MOCKS.search)
            );
    });

    test('Should return valid response if passed invalid data', () => {
        expect.assertions(1);
        return track
            .search(TRACK_DATA_EXAMPLES.invalid.track)
            .then(res =>
                expect(convertDataToMock(res)).toEqual(TRACK_VALID_MOCKS.search)
            );
    });
});

describe('love method', () => {
    test('Should return valid response if passed valid data', () => {
        expect.assertions(1);
        return auth
            .getMobileSession()
            .then(sessionInfo => sessionInfo.session.key)
            .then(sk =>
                track
                    .love(
                        TRACK_DATA_EXAMPLES.valid.artist,
                        TRACK_DATA_EXAMPLES.valid.track,
                        sk
                    )
                    .then(res => expect(convertDataToMock(res)).toEqual({}))
            );
    });

    test('Should return valid response if passed invalid data', () => {
        expect.assertions(1);
        return auth
            .getMobileSession()
            .then(sessionInfo => sessionInfo.session.key)
            .then(sk =>
                track
                    .love(
                        TRACK_DATA_EXAMPLES.invalid.artist,
                        TRACK_DATA_EXAMPLES.invalid.track,
                        sk
                    )
                    .then(res => expect(convertDataToMock(res)).toEqual({}))
            );
    });
});

describe('unlove method', () => {
    test('Should return valid response if passed valid data', () => {
        expect.assertions(1);
        return auth
            .getMobileSession()
            .then(sessionInfo => sessionInfo.session.key)
            .then(sk =>
                track
                    .unlove(
                        TRACK_DATA_EXAMPLES.valid.artist,
                        TRACK_DATA_EXAMPLES.valid.track,
                        sk
                    )
                    .then(res => expect(convertDataToMock(res)).toEqual({}))
            );
    });

    test('Should return valid response if passed invalid data', () => {
        expect.assertions(1);
        return auth
            .getMobileSession()
            .then(sessionInfo => sessionInfo.session.key)
            .then(sk =>
                track
                    .unlove(
                        TRACK_DATA_EXAMPLES.invalid.artist,
                        TRACK_DATA_EXAMPLES.invalid.track,
                        sk
                    )
                    .then(res => expect(convertDataToMock(res)).toEqual({}))
            );
    });
});

describe('updateNowPlaying method', () => {
    test('Should return valid response if passed valid data', () => {
        expect.assertions(1);
        return auth
            .getMobileSession()
            .then(sessionInfo => sessionInfo.session.key)
            .then(sk =>
                track
                    .updateNowPlaying(
                        TRACK_DATA_EXAMPLES.valid.artist,
                        TRACK_DATA_EXAMPLES.valid.track,
                        sk
                    )
                    .then(res =>
                        expect(convertDataToMock(res)).toEqual(
                            TRACK_VALID_MOCKS.nowPlaying
                        )
                    )
            );
    });
});
