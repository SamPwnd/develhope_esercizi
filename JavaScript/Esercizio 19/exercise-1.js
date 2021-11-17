const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25
};

const person2 = Object.assign({}, person1);

person2.firstName='Simon';// Modifica la proprietà "firstName" di person2 in "Simon"

console.log(person1);
console.log(person2);

//Modificando l'oggetto `person2` veniva modificato anche l'oggetto `person1` perchè puntavano entrambi alla stessa area di memoria