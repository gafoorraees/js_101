// What is the return value of the filter method call below? Why? //

[1, 2, 3].filter(num => 'hi');

/* The return value is [1, 2, 3] because the filter method selects
based only the truthiness or falseness of the callback return. Here,
'hi' is truthy, and therefore filter returns the original elements. */
