// Given the following code, what will the final values of a and b be?

let a = 2;
let b = [5, 8];
let arr = [a, b];

arr[0] += 2; // => 2
arr[1][0] -= a; // => 3

// => [ 4, [3, 8] ]

