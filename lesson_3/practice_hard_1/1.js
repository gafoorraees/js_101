// Will the following functions return the same results?

function first() {
  return {
    prop1: "hi there"
  };
}

function second() {
  return
  {
    prop1: "hi there"
  };
}

console.log(first());
console.log(second());

/* No. The first function returns "hi there" and the second function returns 
undefined. JS automatically inserts a semicolon after return in the second 
function thereby never returning prop1. */