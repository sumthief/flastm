const { LIBRARY_VALID_MOCKS, convertDataToMock } = require('./dummy_data');

const username = process.env['LASTFM_TEST_USERNAME'] || '';

const library = require('../library');

describe('getArtists method', () => {
    test('Should return valid response if user exists', () => {
        expect.assertions(1);
        return library
            .getArtists(username)
            .then(res =>
                expect(convertDataToMock(res)).toEqual(
                    LIBRARY_VALID_MOCKS.artists
                )
            );
    });
});
