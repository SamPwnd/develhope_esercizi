enum Role {staff, student, manager, admin};
enum Gender {male, female, other};

const obj: UserInterface = {
	id: 3487,
    name: 'Mario',
    surname: 'Rossi',
    age: 25,
    dateOfBirth: '1995-14-12',
    address: {
        city: 'Roma',
        street: 'Via roma 10',
        postalCode: '00100'
    },
    role: Role.staff, // Ruoli possibili: 'staff', 'student', 'manager', 'admin'
    username: 'MarioRossi80',
    profilePhotoUrl: 'https://bit.ly/3yRngEP',
    companies: [
		{
            id: 148979,
            name: 'Develhope',
            description: 'La migliore',
            location: {
                city: 'Palermo',
                street: 'Via Libertà 58',
                postalCode: '90139'
            }
        },
        {
            id: 123123,
            name: 'Apple',
            description: 'E insomma...',
            location: {
                city: 'Cupertino',
                street: 'One Apple Park Way',
                postalCode: '95014'
            }
        }
	],
    gender: Gender.male // Generi possibili: 'male', 'female', 'other'
}

interface UserInterface {
    id?: number;
    name: string;
    surname: string;
    age?: number;
    dateOfBirth?: string;
    address?: Address;
    role?: Role;
    username?: string;
    profilePhotoUrl?: string;
    companies?: Companies[];
    gender?: Gender;
}

interface Address {
    city: string;
    street: string;
    postalCode: string;
}

interface Companies {
    id: number;
    name: string;
    description: string;
    location: Address;
}

class User implements UserInterface {
    
    name: string;
    surname: string;

    constructor(name: string, surname: string){
        this.name = name;
        this.surname = surname;
    }

    fullName():string {
        return `${this.name} ${this.surname}`;
    }
}

let user:User = new User('Samuele', 'Minissale');
console.log(user.fullName());