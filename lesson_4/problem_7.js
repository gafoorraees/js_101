// What is the return value of map in the following code? Why?

['ant', 'bear'].map(elem => {
  if (elem.length > 3) {
    return elem;
  }
});

/* [undefined, bear] The first return is undefined because 'ant' does not
evaluate to a length greater than 3, which here is the required condition,
and therefore is not returned. Bear does evaluate as greater than 3,
and is returned. */