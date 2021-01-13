/* Alan wrote the following function, which was intended to return
all of the factors of number:

function factors(number) {
  let divisor = number;
  let factors = [];
  do {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  } while (divisor !== 0);
  return factors;
}

How he can make this work without using a do/while loop?
*/

while (divisor > 0 ){
  if number % divisor === 0 {
    factors.push(number / divisor);
  }
  divisor -= 1;
}
