const album = require('../album');
const {
    ARTIST_EXAMPLE,
    ALBUM_EXAMPLE,
    convertDataToMock,
    ALBUM_VALID_MOCK
} = require('./dummy_data');

describe('getInfo function', () => {
    test('Should return valid response if data is valid', () => {
        expect.assertions(1);
        return album
            .getInfo(ARTIST_EXAMPLE, ALBUM_EXAMPLE)
            .then(res => res.data)
            .then(res => expect(convertDataToMock(res)).toEqual(ALBUM_VALID_MOCK));
    });
});
