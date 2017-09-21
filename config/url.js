/* eslint-disable no-process-env */

const config = {
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 3000,
};

if (typeof window !== 'undefined') {
  config.host = window.location.hostname;
  config.port = window.location.port || 80;
}


module.exports = config;
