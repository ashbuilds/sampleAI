/* eslint-disable no-process-env */

const config = require('./config/url');

const env = process.env.NODE_ENV;
const urls = {
  client: env === 'production' ?
      'http://sampleai.ashishmishra.com' :
      'http://' + config.host + ':' + config.port,
  server: env === 'production' ?
      'http://graphql.sampleai.ashishmishra.com/graphql' :
      'http://localhost:3001/graphql'
};




module.exports = urls;
