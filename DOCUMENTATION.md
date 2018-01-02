# Intro

This library provides these [Last.fm packages](https://www.last.fm/api/intro):

* [Album](#album)
* Artist
* Auth
* Chart
* Geo
* Library
* Tag
* Track
* User

### Album

* [getInfo](#getInfo)
* [getInfoByMbid](#getinfobymbid)
* [getTags](#gettags)
* [getTagsByMbid](#getTagsByMbid)
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
        album.removeTag('Breaking Benjamin', 'Phobia', 'rock,alternative', { sk })
    );
```
