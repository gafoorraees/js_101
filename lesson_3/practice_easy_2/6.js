/* Supposed we build an array like this:

let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

This code will create a nested array that looks like this:

["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];

Create a new array that contains all of the above values, but in
an un-nested format:

["Fred", "Wilma". "Barney", "Betty", "Bambam", "Pebbles"]; */

let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

flintstones = [].concat(...flintstones);

console.log(flintstones);