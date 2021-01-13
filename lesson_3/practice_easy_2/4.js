/* Starting with the string:

let famousWords = "seven years ago. . .";

show two different ways to put the expected "Four score and " in front of it. */
let famousWords = "seven years ago. . .";
let firstHalf = "Four score and ";

console.log(firstHalf + famousWords);
console.log(firstHalf.concat(famousWords));