// Print the name, age, and gender of each Family member:

let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

let familyInfo = Object.entries(munsters);

familyInfo.forEach(member => {
  let name = member[0];
  let age = member[1]['age'];
  let gender = member[1].gender

  console.log(`${name} is a ${age}-year-old ${gender}`);
});