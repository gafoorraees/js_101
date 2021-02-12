/* The following code differs slightly from the above code.
What is the return value of map in this case? Why? */

[1, 2, 3].map(num => num * num);

/* [1, 4, 9]. Using the arrow function without braces allows JS to use the
product as the return value. */