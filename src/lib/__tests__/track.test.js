import {
    convertDataToMock,
    TRACK_VALID_MOCKS,
    TRACK_DATA_EXAMPLES,
    INVALID_RESPONSE_STRUCTURE_MOCK
} from './dummy_data';

const track = require('../track');

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
