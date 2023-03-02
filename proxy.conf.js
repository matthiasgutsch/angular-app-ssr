const { env } = require('process');

const target = 'http://20.42.34.38';

const PROXY_CONFIG = [
  {
    context: [
      "/api/tutorials"
   ],
    target: target,
    secure: false,
    headers: {
      Connection: 'Keep-Alive'
    }
  }
]

console.log(PROXY_CONFIG)

module.exports = PROXY_CONFIG;
