const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

// Print values of person using Object.keys
for (const element of Object.keys(person)) {
  console.log(`${element}: ${person[element]}`);
}

