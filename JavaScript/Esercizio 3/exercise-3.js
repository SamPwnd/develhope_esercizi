const students = ['Paul', 'George', 'Lucas'];

function addStudent(student) {
  students.push(student);
}

addStudent('Marco');
console.log(students);

//possiamo modificare il contenuto dell'array nonostante sia stato dichiarato come "const" perchè 
//esso non definisce un valore costante ma il riferimento costante a un valore