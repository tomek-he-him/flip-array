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




flip-array
==========

**Transpose a multidimensional array.**




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
flip([
  [ 1  , 2  ],
  [ 10 , 20 ]
]);
//» [ [ 1 , 10 ],
//    [ 2 , 20 ] ]*

flip([
  [ 1   , 2   , [ 3   , 4   ] ],
  [ 10  , 20  , [ 30  , 40  ] ],
  [ 100 , 200 , [ 300 , 400 ] ]
]);
//» [ [ 1      , 10       , 100        ],
//    [ 2      , 20       , 200        ],
//    [ [3, 4] , [30, 40] , [300, 400] ] ]*
```

*&ensp;The result is a copy of the original array. Nothing is mutated.


3) Huh?

https://en.wikipedia.org/wiki/Transpose

```
Input:
[[1, 2], [10, 20]]

Matrix:
┌       ┐
│  1  2 │
│ 10 20 │
└       ┘

Transposed:
┌       ┐
│  1 10 │
│  2 20 │
└       ┘

Output:
[[1, 10], [2, 20]]
```




API
===

###  *flip*(*array*)  ###

Transposes the given two-dimensional *array* as if it were a matrix.

Returns a new array, flipped against the diagonal of the matrix.

**Parameters:**
- `Array[]` *array*  
  A two-dimensional array

**Return value:**
- `Array[]`  
  A copy of *array*, transposed.




License
-------

[MIT][] © [Tomek Wiszniewski][]

[MIT]: ./License.md
[Tomek Wiszniewski]: https://github.com/tomekwi
