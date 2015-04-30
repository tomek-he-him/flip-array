/* jshint elision: true */

import test from 'tape-catch';

import flip from './module';

test('Plan A', (is) => {
  is.notEqual(
    flip([[1], [10]]),
    [[1], [10]],
    'Doesn’t mutate anything.'
  );

  is.deepEqual(
    flip([[1, 2], [10, 20]]),
    [[1, 10], [2, 20]],
    'Flips a simple 2D array.'
  );

  is.deepEqual(
    flip([[1, 2, 3], [10, 20]])[2].length,
    1,
    'Doesn’t attempt to fill holes.'
  );

  is.deepEqual(
    flip([[1, 2], [10, 20, 30]])[2],
    [, 30],
    'Leaves holes on the right position.'
  );

  is.deepEqual(
    flip([[1, 2, [3, 4]], [10, 20, [30, 40]], [100, 200, [300, 400]]]),
    [[1, 10, 100], [2, 20, 200], [[3, 4], [30, 40], [300, 400]]],
    'Only affects two dimensions.'
  );

  is.end();
});

test('Plan B', (is) => {
  is.throws(
    () => flip('a'),
    TypeError,
    'Throws when it gets a non-array.'
  );

  is.throws(
    () => flip([[1], 2]),
    TypeError,
    'Throws when it gets a non-multidimensional array.'
  );

  is.end();
});
