[![Coveralls – test coverage
](https://img.shields.io/coveralls/tomekwi/flip-array.svg?style=flat-square)
](https://coveralls.io/r/tomekwi/flip-array)
 [![Travis – build status
](https://img.shields.io/travis/tomekwi/flip-array/master.svg?style=flat-square)
](https://travis-ci.org/tomekwi/flip-array)
 [![David – status of dependencies
](https://img.shields.io/david/tomekwi/flip-array.svg?style=flat-square)
](https://david-dm.org/tomekwi/flip-array)
 [![Code style: airbnb
](https://img.shields.io/badge/code%20style-airbnb-blue.svg?style=flat-square)
](https://github.com/airbnb/javascript)
 [![Stability: experimental
](https://img.shields.io/badge/stability-experimental-red.svg?style=flat-square)
](https://nodejs.org/api/documentation.html#documentation_stability_index)




flip-array
==========

**Transpose a multidimensional array.**


**⚠ Heads up!** This is totally a work in progress. [Thoughts and ideas][] are very welcome.

[Thoughts and ideas]:  https://github.com/tomekwi/flip-array/issues




Installation
------------

```sh
$ npm install flip-array
```




Usage
-----

1) Import the module:

```js
import flip from 'flip-array/module';

// – or, in an ES5 environment:
var flip = require('flip-array');
```


2) Profit!

```js
flip([[1, 2], [10, 20]]);
//» [[1, 10], [2, 20]]

flip([[1, 2, [3, 4]], [10, 20]]);
//» [[1, 10], [2, 20], [[3, 4], undefined]]
```




License
-------

[MIT][] © [Tomek Wiszniewski][]

[MIT]: ./License.md
[Tomek Wiszniewski]: https://github.com/tomekwi