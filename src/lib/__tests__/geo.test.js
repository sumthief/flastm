import { convertDataToMock, GEO_VALID_MOCKS } from './dummy_data';

const geo = require('../geo');

describe('getTopArtists method', () => {
    test('Should return valid response if passed country valid', () => {
        expect.assertions(1);
        return geo
            .getTopArtists('Russian federation')
            .then(res =>
                expect(convertDataToMock(res)).toEqual(
                    GEO_VALID_MOCKS.topArtists
                )
            );
    });
});

describe('getTopTracks method', () => {
    test('Should return valid response if passed country valid', () => {
        expect.assertions(1);
        return geo
            .getTopTracks('Russian federation')
            .then(res =>
                expect(convertDataToMock(res)).toEqual(
                    GEO_VALID_MOCKS.topTracks
                )
            );
    });
});
