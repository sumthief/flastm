import {
    convertDataToMock,
    INVALID_RESPONSE_STRUCTURE_MOCK,
    USER_DATA_EXAMPLES,
    USER_VALID_MOCKS
} from './dummy_data';

const config = {
    username: process.env['LASTFM_TEST_USERNAME'] || '',
    password: process.env['LASTFM_TEST_PASSWORD'] || '',
    api_key: process.env['LASTFM_TEST_API_KEY'] || '',
    secret: process.env['LASTFM_TEST_SECRET'] || ''
};

const auth = require('../auth')(config);
const user = require('../user')(config);

const generateNonExistingUsername = username =>
    username.split('').join('!@#%$^&*()');

describe('getArtistTracks method', () => {
    test('Should return valid response if passed user exists', () => {
        expect.assertions(1);
        return user
            .getArtistTracks(config.username, USER_DATA_EXAMPLES.valid.artist)
            .then(res =>
                expect(convertDataToMock(res)).toEqual(
                    USER_VALID_MOCKS.artistTracks
                )
            );
    });
});

describe('getFriends method', () => {
    test('Should return valid response if passed user exists and have friends', () => {
        expect.assertions(1);
        return (
            user
                // rj is username from API example
                .getFriends('rj')
                .then(res =>
                    expect(convertDataToMock(res)).toEqual(
                        USER_VALID_MOCKS.friends
                    )
                )
        );
    });

    test('Should return empty response if passed user exists and have no friends :(', () => {
        expect.assertions(1);
        return user
            .getFriends(config.username)
            .then(res => expect(convertDataToMock(res)).toEqual({}));
    });

    test('Should return invalid response if passed user not exists', () => {
        expect.assertions(1);
        return user
            .getFriends(generateNonExistingUsername(config.username))
            .catch(err =>
                expect(convertDataToMock(err)).toEqual(
                    INVALID_RESPONSE_STRUCTURE_MOCK
                )
            );
    });
});

describe('getInfo method', () => {
    test('Should return valid response if passed yser exists', () => {
        expect.assertions(1);
        return user
            .getInfo({ username: config.username })
            .then(res =>
                expect(convertDataToMock(res)).toEqual(USER_VALID_MOCKS.user)
            );
    });

    test('Should return valid response if user authorized', () => {
        expect.assertions(1);
        return auth
            .getMobileSession()
            .then(sessionInfo => sessionInfo.session.key)
            .then(sk =>
                user
                    .getInfo({ sk })
                    .then(res =>
                        expect(convertDataToMock(res)).toEqual(
                            USER_VALID_MOCKS.user
                        )
                    )
            );
    });

    test('Should return invalid response if passed user not exists', () => {
        expect.assertions(1);
        return user
            .getInfo({ username: generateNonExistingUsername(config.username) })
            .catch(err =>
                expect(convertDataToMock(err)).toEqual(
                    INVALID_RESPONSE_STRUCTURE_MOCK
                )
            );
    });
});

describe('getLovedTracks method', () => {
    test('Should return valid response if passed user exists', () => {
        expect.assertions(1);
        return user
            .getLovedTracks(config.username)
            .then(res =>
                expect(convertDataToMock(res)).toEqual(
                    USER_VALID_MOCKS.lovedtracks
                )
            );
    });

    test('Should return invalid response if passed user exists', () => {
        expect.assertions(1);
        return user
            .getLovedTracks(generateNonExistingUsername(config.username))
            .catch(err =>
                expect(convertDataToMock(err)).toEqual(
                    INVALID_RESPONSE_STRUCTURE_MOCK
                )
            );
    });
});

describe('getPersonalTags method', () => {
    test('Should return valid response if passed data is valid', () => {
        expect.assertions(1);
        return user
            .getPersonalTags(
                config.username,
                'rock',
                USER_DATA_EXAMPLES.taggingtypes.album
            )
            .then(res =>
                expect(convertDataToMock(res)).toEqual(
                    USER_VALID_MOCKS.taggings
                )
            );
    });
});

describe('getRecentTracks method', () => {
    test('Should return valid response if user exists', () => {
        expect.assertions(1);
        return user
            .getRecentTracks(config.username)
            .then(res =>
                expect(convertDataToMock(res)).toEqual(
                    USER_VALID_MOCKS.recentTracks
                )
            );
    });
});

describe('getTopAlbums method', () => {
    test('Should return valid response if user exists', () => {
        expect.assertions(1);
        return user
            .getTopAlbums(config.username)
            .then(res =>
                expect(convertDataToMock(res)).toEqual(
                    USER_VALID_MOCKS.topAlbums
                )
            );
    });
});

describe('getTopArtists method', () => {
    test('Should return valid response if user exists', () => {
        expect.assertions(1);
        return user
            .getTopArtists(config.username)
            .then(res =>
                expect(convertDataToMock(res)).toEqual(
                    USER_VALID_MOCKS.topArtists
                )
            );
    });
});

describe('getTopTags method', () => {
    test('Should return valid response if user exists', () => {
        expect.assertions(1);
        return user
            .getTopTags(config.username)
            .then(res =>
                expect(convertDataToMock(res)).toEqual(USER_VALID_MOCKS.topTags)
            );
    });
});

describe('getTopTracks method', () => {
    test('Should return valid response if user exists', () => {
        expect.assertions(1);
        return user
            .getTopTracks(config.username)
            .then(res =>
                expect(convertDataToMock(res)).toEqual(
                    USER_VALID_MOCKS.topTracks
                )
            );
    });
});

describe('getWeeklyAlbumChart method', () => {
    test('Should return valid response if user exists', () => {
        expect.assertions(1);
        return user
            .getWeeklyAlbumChart(config.username)
            .then(res =>
                expect(convertDataToMock(res)).toEqual(
                    USER_VALID_MOCKS.weeklyAlbumChart
                )
            );
    });
});

describe('getWeeklyArtistChart method', () => {
    test('Should return valid response if user exists', () => {
        expect.assertions(1);
        return user
            .getWeeklyArtistChart(config.username)
            .then(res =>
                expect(convertDataToMock(res)).toEqual(
                    USER_VALID_MOCKS.weeklyArtistChart
                )
            );
    });
});

describe('getWeeklyChartList method', () => {
    test('Should return valid response if user exists', () => {
        expect.assertions(1);
        return user
            .getWeeklyChartList(config.username)
            .then(res =>
                expect(convertDataToMock(res)).toEqual(
                    USER_VALID_MOCKS.weeklyChartList
                )
            );
    });
});

describe('getWeeklyTrackChart method', () => {
    test('Should return valid response if user exists', () => {
        expect.assertions(1);
        return user
            .getWeeklyTrackChart(config.username)
            .then(res =>
                expect(convertDataToMock(res)).toEqual(
                    USER_VALID_MOCKS.weeklyTrackChart
                )
            );
    });
});
