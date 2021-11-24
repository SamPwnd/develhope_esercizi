// Class definition
class Person {
    constructor(first, last){
        this.firstName=first;
        this.lastName=last;
    }
}

const developer = new Person('Mario', 'Rossi');
console.log(`${developer.firstName} ${developer.lastName}`);