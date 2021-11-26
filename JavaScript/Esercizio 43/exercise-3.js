class NegativeAmountError extends Error{
  constructor(){
    super();
    this.name='Error'
    this.message='The amount provided cannot be negative';
  }
}

class WithdrawNotPermittedError extends Error{
  constructor(){
    super();
    this.name='Error'
    this.message='You cannot withdraw more than account balance';
  }
}

class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    if (amount < 0) {
      throw new NegativeAmountError(); // Use custom Error class
    }

    this.#amount += amount;
  }

  withdraw(amount) {
    if (amount < 0) {
      throw new NegativeAmountError(); // Use custom Error class
    }

    if (this.#amount < amount) {
      throw new WithdrawNotPermittedError(); // Use custom Error class
    }

    this.#amount -= amount;
  }

  view() {
    console.log(this.#amount);
  }
}

try {
  const bankAccount = new BankAccount(1000);
  bankAccount.deposit(500);
  bankAccount.deposit(200);
  bankAccount.withdraw(10000);
  bankAccount.view();
} catch (e) {
  console.log('Something went wrong during bank account operations');
}