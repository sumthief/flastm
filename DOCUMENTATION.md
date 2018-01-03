# Intro

This library provides these [Last.fm packages](https://www.last.fm/api/intro):

* [Album](#album)
* [Artist](#artist)
* [Auth](#auth)
* [Chart](#chart)
* [Geo](#geo)
* [Library](#library)
* [Tag](#tag)
* [Track](#track)
* [User](#user)

### Album

* [getInfo](#getinfo)
* [getInfoByMbid](#getinfobymbid)
* [getTags](#gettags)
* [getTagsByMbid](#gettagsbymbid)
* [getTopTags](#gettoptags)
* [getTopTagsByMbid](#gettoptagsbymbid)
* [search](#search)
* [addTags](#addtags)
* [removeTag](#removetag)

##### getInfo

Get information about album by artist and album title.

```javascript
const album = require('flastm')(config).album;
// Optional
const options = {
    autocorrect: 1,
    username: 'xxxxxxxx',
    lang: 'ru'
};

album
    .getInfo('Breaking Benjamin', 'Phobia', options)
    .then(res => console.log(res));
```

##### getInfoByMbid

Get information about album by MusicBrainzID.

```javascript
const album = require('flastm')(config).album;
// Optional
const options = {
    autocorrect: 1,
    username: 'xxxxxxxx',
    lang: 'ru'
};

album
    .getInfoByMbid('326936d7-feec-48d5-bb9f-286552c1f804', options)
    .then(res => console.log(res));
```

##### getTags

Get tags for applied Last.fm user to an album by artist and album title.

```javascript
const album = require('flastm')(config).album;
// Optional
const options = {
    autocorrect: 1,
    // Required if non-authorized. Otherwise options should contain sk (session token) key.
    username: 'xxxxxxxx',
    // Required if username not passed. Otherwise options should contain username key.
    sk: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
};

album
    .getTags('Breaking Benjamin', 'Phobia', options)
    .then(res => console.log(res));
```

##### getTagsByMbid

Get tags for applied Last.fm user to an album by MusicBrainzID.

```javascript
const album = require('flastm')(config).album;
// Optional
const options = {
    autocorrect: 1,
    // Required if non-authorized. Otherwise options should contain sk (session token) key.
    username: 'xxxxxxxx',
    // Required if username not passed. Otherwise options should contain username key.
    sk: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
};

album
    .getTagsByMbid('326936d7-feec-48d5-bb9f-286552c1f804', options)
    .then(res => console.log(res));
```

##### getTopTags

Get top tags to an album by artist and album title.

```javascript
const album = require('flastm')(config).album;
// Optional
const options = {
    autocorrect: 1
};

album
    .getTopTags('Breaking Benjamin', 'Phobia', options)
    .then(res => console.log(res));
```

##### getTopTagsByMbid

Get top tags to an album by MusicBrainzID.

```javascript
const album = require('flastm')(config).album;
// Optional
const options = {
    autocorrect: 1
};

album
    .getTopTagsByMbid('326936d7-feec-48d5-bb9f-286552c1f804', options)
    .then(res => console.log(res));
```

##### search

Search for the album by album title.

```javascript
const album = require('flastm')(config).album;
// Optional
const options = {
    limit: 10,
    page: 2
};

album.search('Phobia', options).then(res => console.log(res));
```

##### addTags

Add tags (separated by comma; less then or equal 10) for an album.

```javascript
const { album, auth } = require('flastm')(config);

auth
    .getMobileSession()
    .then(sessionInfo => sessionInfo.session.key)
    .then(sk =>
        album.addTags('Breaking Benjamin', 'Phobia', 'rock,alternative', { sk })
    );
```

##### removeTag

Remove <strong>tag</strong> for an album.

```javascript
const { album, auth } = require('flastm')(config);

auth
    .getMobileSession()
    .then(sessionInfo => sessionInfo.session.key)
    .then(sk =>
        album.removeTag('Breaking Benjamin', 'Phobia', 'rock,alternative', {
            sk
        })
    );
```

### Artist

* [getCorrection](#getcorrection)
* [getInfo](#getinfo-1)
* [getInfoByMbid](#getinfobymbid-1)
* [getSimilar](#getsimilar)
* [getSimilarByMbid](#getsimilarbymbid)
* [getTags](#gettags-1)
* [getTagsByMbid](#gettagsbymbid-1)
* [getTopAlbums](#gettopalbums)
* [getTopAlbumsByMbid](#gettopalbumsbymbid)
* [getTopTags](#gettoptags-1)
* [getTopTagsByMbid](#gettoptagsbymbid-1)
* [getTopTracks](#gettoptracks)
* [getTopTracksByMbid](#gettoptracksbymbid)
* [search](#search-1)
* [addTags](#addtags-1)
* [removeTag](#removetag-1)

##### getCorrection

Get correction of passed artist to canonical artist.

```javascript
const artist = require('flastm')(config).artist;

artist.getCorrection('Guns and roses').then(res => console.log(res));
```

##### getInfo

Get info about artist.

```javascript
const artist = require('flastm')(config).artist;
// Optional
const options = {
    autocorrect: 1,
    username: 'xxxxxxxx',
    lang: 'ru'
};

artist.getInfo('Breaking Benjamin', options).then(res => console.log(res));
```

##### getInfoByMbid

Get info about artist by MusicBrainzID.

```javascript
const artist = require('flastm')(config).artist;
// Optional
const options = {
    autocorrect: 1,
    username: 'xxxxxxxx',
    lang: 'ru'
};

artist
    .getInfoByMbid('854a1807-025b-42a8-ba8c-2a39717f1d25', options)
    .then(res => console.log(res));
```

##### getSimilar

Get similar artists.

```javascript
const artist = require('flastm')(config).artist;
// Optional
const options = {
    limit: 10,
    autocorrect: 1
};

artist.getSimilar('Breaking Benjamin', options).then(res => console.log(res));
```

##### getSimilarByMbid

Get similar artists by MusicBrainzID.

```javascript
const artist = require('flastm')(config).artist;
// Optional
const options = {
    limit: 10,
    autocorrect: 1
};

artist
    .getSimilarByMbid('854a1807-025b-42a8-ba8c-2a39717f1d25', options)
    .then(res => console.log(res));
```

##### getTags

Get tags for applied user to artist.

```javascript
const artist = require('flastm')(config).artist;
// Optional
const options = {
    autocorrect: 1,
    // Required if non-authorized. Otherwise options should contain sk (session token) key.
    username: 'xxxxxxxx',
    // Required if username not passed. Otherwise options should contain username key.
    sk: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
};

artist.getTags('Breaking Benjamin', options).then(res => console.log(res));
```

##### getTagsByMbid

Get tags for applied user to artist by MusicBrainzID.

```javascript
const artist = require('flastm')(config).artist;
// Optional
const options = {
    autocorrect: 1,
    // Required if non-authorized. Otherwise options should contain sk (session token) key.
    username: 'xxxxxxxx',
    // Required if username not passed. Otherwise options should contain username key.
    sk: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
};

artist
    .getTagsByMbid('854a1807-025b-42a8-ba8c-2a39717f1d25', options)
    .then(res => console.log(res));
```

##### getTopAlbums

Get top albums for artist.

```javascript
const artist = require('flastm')(config).artist;
// Optional
const options = {
    page: 2,
    limit: 10,
    autocorrect: 1
};

artist.getTopAlbums('Breaking Benjamin', options).then(res => console.log(res));
```

##### getTopAlbumsByMbid

Get top albums for artist by MusicBrainzID.

```javascript
const artist = require('flastm')(config).artist;
// Optional
const options = {
    page: 2,
    limit: 10,
    autocorrect: 1
};

artist
    .getTopAlbums('854a1807-025b-42a8-ba8c-2a39717f1d25', options)
    .then(res => console.log(res));
```

##### getTopTags

Get top tags for artist.

```javascript
const artist = require('flastm')(config).artist;
// Optional
const options = { autocorrect: 1 };

artist.getTopTags('Breaking Benjamin', options).then(res => console.log(res));
```

##### getTopTagsByMbid

Get top tags for artist by MusicBrainzID.

```javascript
const artist = require('flastm')(config).artist;
// Optional
const options = { autocorrect: 1 };

artist
    .getTopTagsByMbid('854a1807-025b-42a8-ba8c-2a39717f1d25', options)
    .then(res => console.log(res));
```

##### getTopTracks

Get top tracks for artist.

```javascript
const artist = require('flastm')(config).artist;
// Optional
const options = {
    page: 2,
    limit: 10,
    autocorrect: 1
};

artist.getTopTracks('Breaking Benjamin', options).then(res => console.log(res));
```

##### getTopTracksByMbid

Get top tracks for artist by MusicBrainzID.

```javascript
const artist = require('flastm')(config).artist;
// Optional
const options = {
    page: 2,
    limit: 10,
    autocorrect: 1
};

artist
    .getTopTracksByMbid('854a1807-025b-42a8-ba8c-2a39717f1d25', options)
    .then(res => console.log(res));
```

##### search

Search artists by title.

```javascript
const artist = require('flastm')(config).artist;
// Optional
const options = {
    page: 2,
    limit: 10
};

artist.search('Breaking Benjamin', options).then(res => console.log(res));
```

##### addTags

Add tags for artist.

```javascript
const { artist, auth } = require('flastm')(config);

auth
    .getMobileSession()
    .then(sessionInfo => sessionInfo.session.key)
    .then(sk =>
        artist.addTags('Breaking Benjamin', 'rock,alternative,love', { sk })
    );
```

##### removeTag

Remove <strong>tag</strong> for artist.

```javascript
const { artist, auth } = require('flastm')(config);

auth
    .getMobileSession()
    .then(sessionInfo => sessionInfo.session.key)
    .then(sk => artist.removeTag('Breaking Benjamin', 'rock', { sk }));
```

### Auth

* [getToken](#gettoken)
* [getSession](#getsession)
* [getMobileSession](#getmobilesession)

##### getToken

Get authorization token.

```javascript
const auth = require('flastm')(config);

auth.getToken().then(res => console.log(res.token));
```

##### getSession

Get session (requires <strong>confirmed</strong> token).

```javascript
const auth = require('flastm')(config);

auth.getSession('confirmedToken').then(sessionInfo => console.log(sessionInfo));
```

##### getMobileSession

Get mobile session (by login and password, so <strong>requires username and password in config object</strong>).

```javascript
const auth = require('flastm')(config);

auth
    .getMobileSession()
    .then(sessionInfo => console.log(sessionInfo.session.key));
```

### Chart

* [getTopArtists](#gettopartists)
* [getTopTracks](#gettoptracks-1)
* [getTopTags](#gettoptags-2)

##### getTopArtists

Get the top artists chart

```javascript
const chart = require('flastm')(config).chart;
// Optional
const options = {
    page: 2,
    limit: 10
};

chart.getTopArtists(options).then(res => console.log(res));
```

##### getTopTracks

Get the top tracks chart

```javascript
const chart = require('flastm')(config).chart;
// Optional
const options = {
    page: 2,
    limit: 10
};

chart.getTopTracks(options).then(res => console.log(res));
```

##### getTopTags

Get the top tags chart

```javascript
const chart = require('flastm')(config).chart;
// Optional
const options = {
    page: 2,
    limit: 10
};

chart.getTopTags(options).then(res => console.log(res));
```

### Geo

* [getTopArtists](#gettopartists-1)
* [getTopTracks](#gettoptracks-2)

##### getTopArtists

Get the most popular artists on Last.fm by country

```javascript
const geo = require('flastm')(config).geo;
// Optional
const options = {
    page: 2,
    limit: 10
};
// Full country name.
const country = 'Russian Federation';

geo.getTopArtists(country, options).then(res => console.log(res));
```

##### getTopTracks

Get the most popular tracks on Last.fm last week by country

```javascript
const geo = require('flastm')(config).geo;
// Optional
const options = {
    page: 2,
    limit: 10,
    location: 'xxxxxx'
};
// Full country name.
const country = 'Russian Federation';

geo.getTopTracks(country, options).then(res => console.log(res));
```

### Library

* [getArtists](#getartists)

##### getArtists

List of artists from user`s library

```javascript
const library = require('flastm')(config).library;
// Optional
const options = {
    page: 2,
    limit: 10
};

const username = 'xxxxxxxx';

library.getArtists(username, options).then(res => console.log(res));
```

### Tag

* [getInfo](#getinfo-2)
* [getSimilar](#getsimilar-1)
* [getTopAlbums](#gettopalbums-1)
* [getTopArtists](#gettopartists-2)
* [getTopTracks](#gettoptracks-3)
* [getTopTags](#gettoptags-3)
* [getWeeklyChartList](#getWeeklyChartList)

##### getInfo

Get info about tag

```javascript
const tag = require('flastm')(config).tag;
// Optional
const options = {
    language: 'ru'
};

tag.getInfo('rock', options).then(res => console.log(res));
```

##### getSimilar

Get similar tags.

```javascript
const tag = require('flastm')(config).tag;

tag.getSimilar('rock').then(res => console.log(res));
```

##### getTopAlbums

Get top albums by tag.

```javascript
const tag = require('flastm')(config).tag;
// Optional
const options = {
    page: 2,
    limit: 10
};

tag.getTopAlbums('rock', options).then(res => console.log(res));
```

##### getTopArtists

Get top artists by tag.

```javascript
const tag = require('flastm')(config).tag;
// Optional
const options = {
    page: 2,
    limit: 10
};

tag.getTopArtists('rock', options).then(res => console.log(res));
```

##### getTopTracks

Get top tracks by tag.

```javascript
const tag = require('flastm')(config).tag;
// Optional
const options = {
    page: 2,
    limit: 10
};

tag.getTopTracks('rock', options).then(res => console.log(res));
```

##### getTopTags

Get list of top tags.

```javascript
const tag = require('flastm')(config).tag;

tag.getTopTags().then(res => console.log(res));
```

##### getWeeklyChartList

Get list of possible charts for the tag.

```javascript
const tag = require('flastm')(config).tag;

tag.getWeeklyChartList('rock').then(res => console.log(res));
```

### Track

* [getCorrection](#getcorrection-1)
* [getInfo](#getinfo-3)
* [getInfoByMbid](#getinfobymbid-2)
* [getSimilar](#getsimilar-2)
* [getSimilarByMbid](#getsimilarbymbid-1)
* [getTags](#gettags-2)
* [getTagsByMbid](#gettagsbymbid-2)
* [getTopTags](#gettoptags-4)
* [getTopTagsByMbid](#gettoptagsbymbid-2)
* [search](#search-2)
* [addTags](#addtags-2)
* [love](#love)
* [unlove](#unlove)
* [removeTag](#removetag-2)
* [updateNowPlaying](#updatenowplaying)

##### getCorrection

Get correction of passed track to canonical track.

```javascript
const track = require('flastm')(config).track;

track
    .getCorrection('Breaking Benjamin', 'Dance with devel')
    .then(res => console.log(res));
```

##### getInfo

Get info about track.

```javascript
const track = require('flastm')(config).track;
// Optional
const options = {
    autocorrect: 1,
    // Required if non-authorized. Otherwise options should contain sk (session token) key.
    username: 'xxxxxxxx',
    // Required if username not passed. Otherwise options should contain username key.
    sk: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
};

track
    .getInfo('Breaking Benjamin', 'Dance with Devil', options)
    .then(res => console.log(res));
```

##### getInfoByMbid

Get info about track by MusicBrainzID.

```javascript
const track = require('flastm')(config).track;
// Optional
const options = {
    autocorrect: 1,
    // Required if non-authorized. Otherwise options should contain sk (session token) key.
    username: 'xxxxxxxx',
    // Required if username not passed. Otherwise options should contain username key.
    sk: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
};

track
    .getInfoByMbid('188ff26f-3892-4443-a981-4d0c395a8377', options)
    .then(res => console.log(res));
```

##### getSimilar

Get similar tracks.

```javascript
const track = require('flastm')(config).track;
// Optional
const options = {
    autocorrect: 1,
    limit: 10
};

track
    .getSimilar('Breaking Benjamin', 'Dance with Devil', options)
    .then(res => console.log(res));
```

##### getSimilarByMbid

Get similar tracks by MusicBrainzID.

```javascript
const track = require('flastm')(config).track;
// Optional
const options = {
    autocorrect: 1,
    limit: 10
};

track
    .getSimilarByMbid('188ff26f-3892-4443-a981-4d0c395a8377', options)
    .then(res => console.log(res));
```

##### getTags

Get tags for track.

```javascript
const track = require('flastm')(config).track;
// Optional
const options = {
    autocorrect: 1,
    // Required if non-authorized. Otherwise options should contain sk (session token) key.
    username: 'xxxxxxxx',
    // Required if username not passed. Otherwise options should contain username key.
    sk: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
};

track
    .getTags('Breaking Benjamin', 'Dance with Devil', options)
    .then(res => console.log(res));
```

##### getTagsByMbid

Get tags for track by MusicBrainzID.

```javascript
const track = require('flastm')(config).track;
// Optional
const options = {
    autocorrect: 1,
    // Required if non-authorized. Otherwise options should contain sk (session token) key.
    username: 'xxxxxxxx',
    // Required if username not passed. Otherwise options should contain username key.
    sk: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
};

track
    .getTagsByMbid('188ff26f-3892-4443-a981-4d0c395a8377', options)
    .then(res => console.log(res));
```

##### getTopTags

Get top tags for track.

```javascript
const track = require('flastm')(config).track;
// Optional
const options = {
    autocorrect: 1
};

track
    .getTopTags('Breaking Benjamin', 'Dance with Devil', options)
    .then(res => console.log(res));
```

##### getTopTagsByMbid

Get top tags for track by MusicBrainzID.

```javascript
const track = require('flastm')(config).track;
// Optional
const options = {
    autocorrect: 1
};

track
    .getTopTagsByMbid('Breaking Benjamin', 'Dance with Devil', options)
    .then(res => console.log(res));
```

##### search

Search track by title.

```javascript
const track = require('flastm')(config).track;
// Optional
const options = {
    limit: 10,
    page: 2,
    artist: 'Breaking Benjamin'
};

track.search('Dance with Devil', options).then(res => console.log(res));
```

##### addTags

Add tags to track.

```javascript
const { track, auth } = require('flastm')(config);

auth
    .getMobileSession()
    .then(sessionInfo => sessionInfo.session.key)
    .then(sk =>
        track.addTags(
            'Breaking Benjamin',
            'Dance With Devil',
            'rock,alternative,love',
            sk
        )
    );
```

##### love

Love the track.

```javascript
const { track, auth } = require('flastm')(config);

auth
    .getMobileSession()
    .then(sessionInfo => sessionInfo.session.key)
    .then(sk => track.love('Breaking Benjamin', 'Dance With Devil', sk));
```

##### unlove

Unlove the track.

```javascript
const { track, auth } = require('flastm')(config);

auth
    .getMobileSession()
    .then(sessionInfo => sessionInfo.session.key)
    .then(sk => track.unlove('Breaking Benjamin', 'Dance With Devil', sk));
```

##### removeTag

Remove <strong>tag</strong> from track.

```javascript
const { track, auth } = require('flastm')(config);

auth
    .getMobileSession()
    .then(sessionInfo => sessionInfo.session.key)
    .then(sk =>
        track.removeTag('Breaking Benjamin', 'Dance With Devil', 'rock', sk)
    );
```

##### updateNowPlaying

Used to notify Last.fm that a user has started listening to a track.

```javascript
const { track, auth } = require('flastm')(config);
// Optional
const options = {
    album: 'Phobia',
    trackNumber: 1,
    context: 'see last.fm api for details',
    mbid: '188ff26f-3892-4443-a981-4d0c395a8377',
    duration: 251,
    albumArtist: 'Breaking Benjamin'
};

auth
    .getMobileSession()
    .then(sessionInfo => sessionInfo.session.key)
    .then(sk =>
        track
            .updateNowPlaying(
                'Breaking Benjamin',
                'Dance with Devil',
                sk,
                options
            )
            .then(res => console.log(res))
    );
```

### User

* [getArtistTracks](#getartisttracks)
* [getFriends](#getfriends)
* [getInfo](#getinfo-4)
* [getLovedTracks](#getlovedtracks)
* [getPersonalTags](#getpersonaltags)
* [getRecentTracks](#getrecenttracks)
* [getTopAlbums](#gettopalbums-2)
* [getTopArtists](#gettopartists-3)
* [getTopTags](#gettoptags)
* [getTopTracks](#gettoptracks)
* [getWeeklyAlbumChart](#getweeklyalbumchart)
* [getWeeklyArtistChart](#getweeklyartistchart)
* [getWeeklyChartList](#getweeklychartlist)
* [getWeeklyTrackChart](#getweeklytrackchart)

##### getArtistTracks

Get a list of tracks by a given artist scrobbled by this user, including scrobble time.

```javascript
const user = require('flastm')(config).user;
// Optional
const options = {
    startTimestamp: 1514964785,
    endTimestamp: 1514964785,
    page: 2
};

user
    .getArtistTracks('xxxxname', 'Breaking Benjamin', options)
    .then(res => console.log(res));
```

##### getFriends

Get list of friends for specified user.

```javascript
const user = require('flastm')(config).user;
// Optional
const options = {
    page: 2,
    limit: 10,
    recenttracks: 1
};

user.getFriends('xxxxname', options).then(res => console.log(res));
```

##### getInfo

Get information about specified user.

```javascript
const user = require('flastm')(config).user;

user.getInfo('xxxxname').then(res => console.log(res));
```

##### getLovedTracks

Get list of loved tracks for specified user.

```javascript
const user = require('flastm')(config).user;
// Optional
const options = {
    page: 2,
    limit: 10
};

user.getLovedTracks('xxxxname', options).then(res => console.log(res));
```

##### getPersonalTags

Get list of personal tags for specified user.

```javascript
const user = require('flastm')(config).user;
// Optional
const options = {
    page: 2,
    limit: 10
};

const taggingtype = 'artist'; // or 'album' or 'track'.

user
    .getPersonalTags('xxxxname', 'rock', taggingtype, options)
    .then(res => console.log(res));
```

##### getRecentTracks

Get list of recent tracks for specified user.

```javascript
const user = require('flastm')(config).user;
// Optional
const options = {
    page: 2,
    limit: 10,
    from: 1514964785,
    extended: 1,
    to: 1514964785
};

user.getRecentTracks('xxxxname', options).then(res => console.log(res));
```

##### getTopAlbums

Get list of most popular albums for specified user.

```javascript
const user = require('flastm')(config).user;
// Optional
const options = {
    period: 'overall', // overall | 7day | 1month | 3month | 6month | 12month
    limit: 10,
    page: 2
};

user.getTopAlbums('xxxxname', options).then(res => console.log(res));
```

##### getTopArtists

Get list of most popular artists for specified user.

```javascript
const user = require('flastm')(config).user;
// Optional
const options = {
    period: 'overall', // overall | 7day | 1month | 3month | 6month | 12month
    limit: 10,
    page: 2
};

user.getTopArtists('xxxxname', options).then(res => console.log(res));
```

##### getTopTags

Get list of most popular tags for specified user.

```javascript
const user = require('flastm')(config).user;
// Optional
const options = { limit: 10 };

user.getTopTags('xxxxname', options).then(res => console.log(res));
```

##### getTopTracks

Get list of most popular tracks for specified user.

```javascript
const user = require('flastm')(config).user;
// Optional
const options = {
    period: 'overall', // overall | 7day | 1month | 3month | 6month | 12month
    limit: 10,
    page: 2
};

user.getTopTracks('xxxxname', options).then(res => console.log(res));
```

##### getWeeklyAlbumChart

Get an album chart for specified user.

```javascript
const user = require('flastm')(config).user;
// Optional
const options = {
    from: 1514964785,
    to: 1514964785
};

user.getWeeklyAlbumChart('xxxxname', options).then(res => console.log(res));
```

##### getWeeklyArtistChart

Get an artist chart for specified user.

```javascript
const user = require('flastm')(config).user;
// Optional
const options = {
    from: 1514964785,
    to: 1514964785
};

user.getWeeklyArtistChart('xxxxname', options).then(res => console.log(res));
```

##### getWeeklyChartList

Get a list of available charts for this user

```javascript
const user = require('flastm')(config).user;

user.getWeeklyChartList('xxxxname').then(res => console.log(res));
```

##### getWeeklyTrackChart

Get a track chart for specified user.

```javascript
const user = require('flastm')(config).user;
// Optional
const options = {
    from: 1514964785,
    to: 1514964785
};

user.getWeeklyTrackChart('xxxxname', options).then(res => console.log(res));
```
