import { convertDataToMock, CHART_VALID_MOCKS } from './dummy_data';

const chart = require('../chart');

describe('getTopArtists method', function() {
    test('Should return valid response', () => {
        expect.assertions(1);
        return chart
            .getTopArtists()
            .then(res =>
                expect(convertDataToMock(res)).toEqual(
                    CHART_VALID_MOCKS.topArtists
                )
            );
    });
});

describe('getTopTracks method', function() {
    test('Should return valid response', () => {
        expect.assertions(1);
        return chart
            .getTopTracks()
            .then(res =>
                expect(convertDataToMock(res)).toEqual(
                    CHART_VALID_MOCKS.topTracks
                )
            );
    });
});

describe('getTopTags method', function() {
    test('Should return valid response', () => {
        expect.assertions(1);
        return chart
            .getTopTags()
            .then(res =>
                expect(convertDataToMock(res)).toEqual(
                    CHART_VALID_MOCKS.topTags
                )
            );
    });
});
