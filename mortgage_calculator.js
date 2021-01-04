const readline = require("readline-sync");

function prompt(message) {
  console.log(`${message}`);
}

function invalidNumber(number) {
  return number.trimstart() === '' || number.isNaN();
}

prompt("Welcome to the Mortgage calculator!");

while (true) {
  prompt("Please enter your loan amount.");
  let loanAmount = readline.question();

  while (invalidNumber(loanAmount)) {
    prompt("Hmm..that doesn't look like a valid number..");
    loanAmount = readline.question();
  }

  prompt("Please enter your monthly interest rate in decimal form.");
  let monthlyInterest = readline.question();

  while (invalidNumber(monthlyInterest)) {
    prompt("Hmm..that doesn't look like a valid number..");
    monthlyInterest = readline.question();
  }

  prompt("Please enter the duration of your loan in months");
  let durationMonths = readline.question();

  while (invalidNumber(durationMonths)) {
    prompt("Hmm..that doesn't look like a valid number..");
    durationMonths = readline.question();
  }

  let monthlyPayment = loanAmount * (monthlyInterest /
  (1 - Math.pow((1 + monthlyInterest), (-durationMonths))));


  console.log(`Your total monthly payment is ${monthlyPayment}`);

  prompt("Would you like to run another calculation?");
  let answer = readline.question();

  if (answer[0].toLowerCase() !== 'y') break;
}