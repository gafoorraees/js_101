// How does Array.protoype.fill work? Is it destructive? How can we find out?

let arr = [1, 2, 3, 4, 5];
arr.fill(1, 1, 5);

/* .fill changes the elements of an array. The first value is what we wish to
change the elements to; the second and third values are the
indices to start and end from.

Running the code in node tells us that .fill is destructive. */