function canPlay() {
  const personName = 'Paul';

  if (true) {
    personName = 'George'; // Adesso la variabile è di sola lettura e non può essere modificata, perciò si otterrà un errore
  }

  personName += ' plays football';

  console.log(personName);
}

canPlay();