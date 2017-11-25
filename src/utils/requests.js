const config = require('../../config');
const axios = require('axios');

const allowedMethods = ['get', 'post'];

const allowedPackages = [
  'album',
  'artist',
  'chart',
  'geo',
  'library',
  'tag',
  'track',
  'user'
];

export const makeRequest = opts => {
  const { method, _package, action, ...extraOpts } = opts;
  const isMethodValid =
    method &&
    typeof method === 'string' &&
    allowedMethods.includes(method.toLowerCase());
  if (!isMethodValid) {
    const processedMethods = allowedMethods
      .map(method => `"${method.toUpperCase()}"`)
      .join(', ');
    throw new Error(
      `Passed incorrect method. Please use one of these: ${processedMethods}.`
    );
  }
  const isPackageValid =
    _package &&
    typeof _package === 'string' &&
    allowedPackages.includes(_package.toLowerCase());
  if (!isPackageValid) {
    const processedPackages = allowedPackages
      .map(_package => `"${_package}"`)
      .join(', ');
    throw new Error(
      `Passed incorrect package. Please use one of these: ${processedPackages}.`
    );
  }
  if (!action) {
    throw new Error('Passed incorrect action.');
  }
  let data = {
    format: 'json',
    method: `${_package}.${action}`,
    api_key: config.api_key
  };
  Object.keys(extraOpts).forEach(key => (data[key] = extraOpts[key]));
  if (method.toLowerCase() === 'get') {
    data = { params: data };
  }
  return axios[method]('http://ws.audioscrobbler.com/2.0/', data);
};
