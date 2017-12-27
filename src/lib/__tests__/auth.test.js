const auth = require('../auth');
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

describe('getMobileSession', () => {
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
