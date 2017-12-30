const { LIBRARY_VALID_MOCKS, convertDataToMock } = require('./dummy_data');
const config = {
    username: process.env['LASTFM_TEST_USERNAME'] || '',
    password: process.env['LASTFM_TEST_PASSWORD'] || '',
    api_key: process.env['LASTFM_TEST_API_KEY'] || '',
    secret: process.env['LASTFM_TEST_SECRET'] || ''
};

const library = require('../library')(config);

describe('getArtists method', () => {
    test('Should return valid response if user exists', () => {
        expect.assertions(1);
        return library
            .getArtists(config.username)
            .then(res =>
                expect(convertDataToMock(res)).toEqual(
                    LIBRARY_VALID_MOCKS.artists
                )
            );
    });
});
