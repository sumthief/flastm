const config = require('../../config');
const axios = require('axios');

export const makeRequest = opts => {
  const { method = 'get', pkg, action, ...extraOpts } = opts;
  let data = {
    format: 'json',
    method: `${pkg}.${action}`,
    api_key: config.api_key
  };
  Object.keys(extraOpts).forEach(key => (data[key] = extraOpts[key]));
  if (method.toLowerCase() === 'get') {
    data = { params: data };
  }
  return axios[method]('http://ws.audioscrobbler.com/2.0/', data);
};
