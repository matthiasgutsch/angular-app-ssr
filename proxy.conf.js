const { env } = require('process');

const target = 'https://immo.api.nexocdn.com';

const PROXY_CONFIG = [{
    context: [
        "/api/products/list_public"
    ],
    target: target,
    secure: true,
    headers: {
        Connection: 'Keep-Alive'
    }
}]

console.log(PROXY_CONFIG)

module.exports = PROXY_CONFIG;