function getKeys(obj) {
  let keys=[];
  for (const key in obj) {
    keys.push(key)
  }
  return keys;
}

//function getKeys(obj) {
//  return Object.keys(obj);
//}

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 32,
  city: 'Rome',
  job: 'Developer',
};

const keys = getKeys(person);
console.log(keys);