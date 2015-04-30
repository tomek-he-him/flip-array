export default (array) => {
  if (!Array.isArray(array)) throw new TypeError(
    'flip-array: Make sure you pass an `{Array[]} array`.'
  );

  const result = [];
  array.forEach((row, rowIndex) => {
    if (!Array.isArray(row)) throw new TypeError(
      'flip-array: Make sure you pass a two-dimensional `{Array[]} array`. ' +
      `The item at index ${rowIndex} is not an array.`
    );

    row.forEach((column, columnIndex) => {
      if (!result[columnIndex]) result[columnIndex] = [];
      result[columnIndex][rowIndex] = column;
    });
  });

  return result;
};
