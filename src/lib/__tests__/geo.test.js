jest.setTimeout(10000);

import { convertDataToMock, GEO_VALID_MOCKS } from './dummy_data';
const config = {
    username: process.env['LASTFM_TEST_USERNAME'] || '',
    password: process.env['LASTFM_TEST_PASSWORD'] || '',
    api_key: process.env['LASTFM_TEST_API_KEY'] || '',
    secret: process.env['LASTFM_TEST_SECRET'] || ''
};

const geo = require('../geo')(config);

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
