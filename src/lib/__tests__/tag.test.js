jest.setTimeout(10000);

import { convertDataToMock, TAG_VALID_MOCKS } from './dummy_data';
const config = {
    username: process.env['LASTFM_TEST_USERNAME'] || '',
    password: process.env['LASTFM_TEST_PASSWORD'] || '',
    api_key: process.env['LASTFM_TEST_API_KEY'] || '',
    secret: process.env['LASTFM_TEST_SECRET'] || ''
};

const tag = require('../tag')(config);

describe('getInfo method', () => {
    test('Should return valid response', () => {
        expect.assertions(1);
        return tag
            .getInfo('rock')
            .then(res =>
                expect(convertDataToMock(res)).toEqual(TAG_VALID_MOCKS.tag)
            );
    });
});

describe('getSimilar method', () => {
    test('Should return valid response', () => {
        expect.assertions(1);
        return tag
            .getSimilar('rock')
            .then(res =>
                expect(convertDataToMock(res)).toEqual(TAG_VALID_MOCKS.similar)
            );
    });
});

describe('getTopAlbums method', () => {
    test('Should return valid response', () => {
        expect.assertions(1);
        return tag
            .getTopAlbums('rock')
            .then(res =>
                expect(convertDataToMock(res)).toEqual(TAG_VALID_MOCKS.albums)
            );
    });
});

describe('getTopArtists method', () => {
    test('Should return valid response', () => {
        expect.assertions(1);
        return tag
            .getTopArtists('rock')
            .then(res =>
                expect(convertDataToMock(res)).toEqual(
                    TAG_VALID_MOCKS.topartists
                )
            );
    });
});

describe('getTopTracks method', () => {
    test('Should return valid response', () => {
        expect.assertions(1);
        return tag
            .getTopTracks('rock')
            .then(res =>
                expect(convertDataToMock(res)).toEqual(TAG_VALID_MOCKS.tracks)
            );
    });
});

describe('getTopTags method', () => {
    test('Should return valid response', () => {
        expect.assertions(1);
        return tag
            .getTopTags()
            .then(res =>
                expect(convertDataToMock(res)).toEqual(TAG_VALID_MOCKS.toptags)
            );
    });
});

describe('getWeeklyChartList method', () => {
    test('Should return valid response', () => {
        expect.assertions(1);
        return tag
            .getWeeklyChartList()
            .then(res =>
                expect(convertDataToMock(res)).toEqual(
                    TAG_VALID_MOCKS.weeklychartlist
                )
            );
    });
});
