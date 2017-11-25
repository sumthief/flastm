const requests = require('./dist/utils/requests');

const info = requests
  .makeRequest({
    method: 'get',
    _package: 'artist',
    action: 'getInfo',
    artist: 'silent civilian'
  })
  .then(response => {
    console.log(response.data);
  })
  .catch(err => {
    console.log(err);
  });
