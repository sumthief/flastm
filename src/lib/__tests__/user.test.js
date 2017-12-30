import {
    convertDataToMock,
    INVALID_RESPONSE_STRUCTURE_MOCK,
    USER_DATA_EXAMPLES,
    USER_VALID_MOCKS
} from './dummy_data';
import * as auth from '../auth';

const user = require('../user');
const { username } = require('../../../config');

const generateNonExistingUsername = username =>
    username.split('').join('!@#%$^&*()');

describe('getArtistTracks method', () => {
    test('Should return valid response if passed user exists', () => {
        expect.assertions(1);
        return user
            .getArtistTracks(username, USER_DATA_EXAMPLES.valid.artist)
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
            .getFriends(username)
            .then(res => expect(convertDataToMock(res)).toEqual({}));
    });

    test('Should return invalid response if passed user not exists', () => {
        expect.assertions(1);
        return user
            .getFriends(generateNonExistingUsername(username))
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
            .getInfo({ username })
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
            .getInfo({ username: generateNonExistingUsername(username) })
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
            .getLovedTracks(username)
            .then(res =>
                expect(convertDataToMock(res)).toEqual(
                    USER_VALID_MOCKS.lovedtracks
                )
            );
    });

    test('Should return invalid response if passed user exists', () => {
        expect.assertions(1);
        return user
            .getLovedTracks(generateNonExistingUsername(username))
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
                username,
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
            .getRecentTracks(username)
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
            .getTopAlbums(username)
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
            .getTopArtists(username)
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
            .getTopTags(username)
            .then(res =>
                expect(convertDataToMock(res)).toEqual(USER_VALID_MOCKS.topTags)
            );
    });
});

describe('getTopTracks method', () => {
    test('Should return valid response if user exists', () => {
        expect.assertions(1);
        return user
            .getTopTracks(username)
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
            .getWeeklyAlbumChart(username)
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
            .getWeeklyArtistChart(username)
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
            .getWeeklyChartList(username)
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
            .getWeeklyTrackChart(username)
            .then(res =>
                expect(convertDataToMock(res)).toEqual(
                    USER_VALID_MOCKS.weeklyTrackChart
                )
            );
    });
});
