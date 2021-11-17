function calculate() {
  return ops = {
    result: 0,
    add(x) {
      this.result+= x;
      return this;
    },
    sub(x) {
      this.result-= x;
      return this;
    },
    multiply(x){
      this.result*= x;
      return this;
    },
    divide(x){
      this.result/= x;
      return this;
    },
    printResult(){
      console.log(this.result);
    }
  }
}

const calculator = calculate();
calculator.add(2).add(4).multiply(3).sub(1).sub(3).divide(2).printResult(); // Il risultato sarà: 7