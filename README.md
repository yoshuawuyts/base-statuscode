# base-statuscode
[![NPM version][npm-image]][npm-url] 
[![build status][travis-image]][travis-url] 
[![Test coverage][coveralls-image]][coveralls-url]

## Installation
```bash
$ npm i --save base-statuscode
```

## Overview
```js
var baseStatus = require('base-statuscode');

baseStatus(404);
// => 400

baseStatus(205);
// => 200
```

## License
[MIT](https://tldrlegal.com/license/mit-license) © [Yoshua Wuyts](yoshuawuyts.com)

[npm-image]: https://img.shields.io/npm/v/base-statuscode.svg?style=flat
[npm-url]: https://npmjs.org/package/base-statuscode
[travis-image]: https://img.shields.io/travis/yoshuawuyts/base-statuscode.svg?style=flat
[travis-url]: https://travis-ci.org/yoshuawuyts/base-statuscode
[coveralls-image]: https://img.shields.io/coveralls/yoshuawuyts/base-statuscode.svg?style=flat
[coveralls-url]: https://coveralls.io/r/yoshuawuyts/base-statuscode?branch=master