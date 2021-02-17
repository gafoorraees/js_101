let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

console.log(arr.map(subArr => {
  if (typeof subArr[0] === 'string') {
    return subArr.sort((a, b) => b.length - a.length);
  } else {
    return subArr.sort((a, b) => b - a);
  }
}));

