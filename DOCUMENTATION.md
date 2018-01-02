# Intro

This library provides these [Last.fm packages](https://www.last.fm/api/intro):

* [Album](#album)
* [Artist](#artist)
* [Auth](#auth)
* [Chart](#chart)
* Geo
* Library
* Tag
* Track
* User

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
* [getTopTagsByMbid](#gettoptagsbymbid)
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
