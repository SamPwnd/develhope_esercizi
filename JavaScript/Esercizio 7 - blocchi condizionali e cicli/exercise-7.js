function sumUntil(maxValue) {
  let sum=1;
  let string="1";
  for (let index = 2; index <= maxValue; index++) {
    sum+=index;
    string=string+" + " + index;
  }
  return string + " = " + sum;
}

console.log(sumUntil(5));