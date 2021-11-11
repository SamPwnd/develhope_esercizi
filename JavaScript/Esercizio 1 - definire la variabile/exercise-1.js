function canPlay() {
  
  let personName = 'Paul'; // Se si dichiara una variabile all'interno di un if, essa esisterà solo al suo interno

  personName += ' plays football'; // Argh! personName is not defined

  console.log(personName);
}

canPlay();