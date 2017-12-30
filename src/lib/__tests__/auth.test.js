const config = {
    username: process.env['LASTFM_TEST_USERNAME'] || '',
    password: process.env['LASTFM_TEST_PASSWORD'] || '',
    api_key: process.env['LASTFM_TEST_API_KEY'] || '',
    secret: process.env['LASTFM_TEST_SECRET'] || ''
};

const auth = require('../auth')(config);
const { convertDataToMock, AUTH_VALID_MOCKS } = require('./dummy_data');

describe('getToken method', () => {
    test('Should return valid response', () => {
        expect.assertions(1);
        return auth
            .getToken()
            .then(res =>
                expect(convertDataToMock(res)).toEqual(AUTH_VALID_MOCKS.token)
            );
    });
});

describe('getMobileSession method', () => {
    test('Should return valid response', () => {
        expect.assertions(1);
        return auth
            .getMobileSession()
            .then(res =>
                expect(convertDataToMock(res)).toEqual(
                    AUTH_VALID_MOCKS['mobileSession']
                )
            );
    });
});
