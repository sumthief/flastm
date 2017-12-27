const { LIBRARY_VALID_MOCKS, convertDataToMock } = require('./dummy_data');

const config = require('../../../config');

const library = require('../library');

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
