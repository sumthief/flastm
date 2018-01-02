# flastm [![Build Status](https://travis-ci.org/sumthief/flastm.svg?branch=master)](https://travis-ci.org/sumthief/flastm) [![Coverage Status](https://coveralls.io/repos/github/sumthief/flastm/badge.svg?branch=master)](https://coveralls.io/github/sumthief/flastm?branch=master)

Package for Node.JS which provides Promise based API under [Last.fm](https://www.last.fm/api/intro)
REST API.

## Installation

Install via npm:

```
npm install --save flastm
```

Install via yarn:

```bash
yarn add flastm
```

## Usage

First of all to use this package you should receive Last.fm API key and secret. You can do it via [creation API key.](https://www.last.fm/api/account/create)

After that you can use package by this way:

```javascript
const config = {
    api_key: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    secret: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    // Optional: fill only if chosen use auth.getMobileSession method for authorization.
    username: 'xxxxxxxx',
    password: 'xxxxxxxx'
};
const flastm = require('flastm')(config);
const { album, artist } = flastm;

// Get information about album.
album.getInfo('Breaking Benjamin', 'Phobia')
    .then(res => console.log(res));

// Get information about artist.
artist.getInfo('Breaking Benjamin')
    .then(res => console.log(res));
```

List of all packages and methods you can see [here.](https://github.com/sumthief/flastm/blob/master/DOCUMENTATION.md)
