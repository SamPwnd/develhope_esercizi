function memoize(fn) {
  let cache = {};
  
  return (num) => {
    if (num in cache){
      console.log('Fetching from cache for '+ num);
      return cache[num];
    }
    else{
      console.log('Calculating result for '+ num);
      cache[num]=fn(num);
      return cache[num];
    }
  }
}

function factorial(x) {
  if (x === 0) {
    return 1;
  }

  return x * factorial(x - 1);
}

factorial = memoize(factorial);
console.log(factorial(10));
console.log(factorial(6));
console.log(factorial(5));