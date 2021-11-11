function canPlay() {
  const personName = 'Paul';

  if (true) {
    // Rendendo personName readonly tramite la keyword const
    // otterrò in questo punto del codice l'errore "TypeError: Assignment to constant variable"
    personName = 'George';
  }

  personName += ' plays football';

  console.log(personName);
}

canPlay();