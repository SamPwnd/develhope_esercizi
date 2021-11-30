const persons = [
  {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  },
  {
    id: 2,
    firstName: 'Maria',
    lastName: 'Verdi',
    age: 32
  },
  {
    id: 3,
    firstName: 'Giovanni',
    lastName: 'Rossi',
    age: 35
  }
];

const jobs = [
  {
    id: 1,
    jobTitle: 'CEO'
  },
  {
    id: 2,
    jobTitle: 'Project Manager'
  },
  {
    id: 3,
    jobTitle: 'Developer'
  }
];

function fetchPersonById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    const person = persons.find(item => item.id===id);
    if (person)
      return resolve(person);
    return reject(`nessuna persona corrisponde a questo id: ${id}`);
  }, 1000);
  });
}

function fetchJobById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    const job = jobs.find(item => item.id===id);
    if (job)
      return resolve(job);
    return reject(`nessun lavoro corrisponde a questo id: ${id}`);
  }, 1000);
  });
}

// fetchPersonById(3)
// .then((person) => console.log(person))
// .catch((err) => console.log(`Errore: ${err}`));

// fetchJobById(1)
// .then((job) => console.log(job))
// .catch((err) => console.log(`Errore: ${err}`));

Promise.all([fetchPersonById(3), fetchJobById(2)])
.then((result) => console.log(result))
.catch((err) => console.log(`Errore: ${err}`));
