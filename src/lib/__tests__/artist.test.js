import { INVALID_RESPONSE_STRUCTURE_MOCK } from './dummy_data';

const artist = require('../artist');
const auth = require('../auth');
const {
    convertDataToMock,
    ARTIST_VALID_MOCKS,
    ARTIST_DATA_EXAMPLES
} = require('./dummy_data');

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
            .then(res =>
                expect(convertDataToMock(res)).toEqual(
                    ARTIST_VALID_MOCKS.artist_empty
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
