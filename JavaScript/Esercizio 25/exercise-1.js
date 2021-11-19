const person = {
  get firstName(){
    return this._firstName
  },
  get lastName(){
    return this._lastName
  },

  set firstName(value){
    this._firstName=value;
  },
  set lastName(value){
    this._lastName=value;
  },

  fullName: function(){
    return `${this._firstName} ${this._lastName}`;
  }
}

const john = Object.create(person);
const simon = Object.create(person);

john.firstName='John';
simon.firstName='Simon';

john.lastName='Doe';
simon.lastName='Collins';

console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins