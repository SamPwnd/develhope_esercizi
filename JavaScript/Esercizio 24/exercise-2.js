const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

// Print values of person using Object.values

for (const element of Object.values(person)) {
  console.log(element);
}
