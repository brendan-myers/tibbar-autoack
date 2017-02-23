# Tibbar autoAck
  Middleware for Tibbar that automatically acknowledge messages received by a service worker.

  [![NPM Version][npm-image]][npm-url]
  [![NPM Downloads][downloads-image]][downloads-url]
  [![Build][travis-image]][travis-url]
  [![Coverage Status][coveralls-image]][coveralls-url]

## Usage

```js
const tibbar = require('tibbar');
const autoAck = require('tibbar-autoack');
const worker = tibbar().worker;

worker.use(autoAck);

worker.accept('/', (req, res) => {
  res.send('Hello, world!');
});
worker.connect('amqp://localhost');
```

[npm-image]: https://img.shields.io/npm/v/tibbar-autoack.svg
[npm-url]: https://npmjs.org/package/tibbar-autoack
[downloads-image]: https://img.shields.io/npm/dm/tibbar-autoack.svg
[downloads-url]: https://npmjs.org/package/tibbar-autoack
[travis-image]: https://travis-ci.org/brendan-myers/tibbar-autoack.svg?branch=master
[travis-url]: https://travis-ci.org/brendan-myers/tibbar-autoack
[coveralls-image]: https://coveralls.io/repos/github/brendan-myers/tibbar-autoack/badge.svg
[coveralls-url]: https://coveralls.io/github/brendan-myers/tibbar-autoack

### License
  [MIT](LICENSE)