// What is the return value of map in the following code? Why? //

[1, 2, 3].map(num => {
  num * num;
});

/* The return value is [undefined, undefined, undefined] due to their
being no return in the callback function as map is transformative
and returns an arrray with transformed elements */