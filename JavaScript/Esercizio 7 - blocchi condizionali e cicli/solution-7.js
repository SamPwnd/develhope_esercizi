function sumUntil(maxValue) {
  let sum = 0;

  for (let value = 1; value <= maxValue; value++) {
    sum += value;
  }

  return sum;
}

console.log(sumUntil(5));