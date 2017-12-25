const album = require('../album');
const {
    VALID_EXAMPLES,
    INVALID_EXAMPLES,
    ALBUM_VALID_STRUCTURE_MOCK,
    ALBUM_INVALID_STRUCTURE_MOCK,
    convertDataToMock
} = require('./dummy_data');

describe('getInfo function', () => {
    test('Should return invalid response if data is invalid', () => {
        expect.assertions(1);
        return album
            .getInfo(INVALID_EXAMPLES.artist, INVALID_EXAMPLES.album)
            .catch(err =>
                expect(convertDataToMock(err)).toEqual(
                    ALBUM_INVALID_STRUCTURE_MOCK
                )
            );
    });

    test('Should return valid response if data is valid', () => {
        expect.assertions(1);
        return album
            .getInfo(VALID_EXAMPLES.artist, VALID_EXAMPLES.album)
            .then(res =>
                expect(convertDataToMock(res)).toEqual(
                    ALBUM_VALID_STRUCTURE_MOCK
                )
            );
    });

    test('Should return invalid response if passed no args', () => {
        expect.assertions(1);
        return album
            .getInfo()
            .catch(err =>
                expect(convertDataToMock(err)).toEqual(
                    ALBUM_INVALID_STRUCTURE_MOCK
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
                expect(convertDataToMock(res)).toEqual(
                    ALBUM_VALID_STRUCTURE_MOCK
                )
            );
    });

    test('Should return invalid response if passed api_sig to extra opts', () => {
        expect.assertions(1);
        return album
            .getInfo(INVALID_EXAMPLES.artist, INVALID_EXAMPLES.album, {
                api_sig: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
            })
            .catch(err => {
                console.log(err.request);
                return err;
            })
            .catch(err =>
                expect(convertDataToMock(err)).toEqual(
                    ALBUM_INVALID_STRUCTURE_MOCK
                )
            );
    });
});
