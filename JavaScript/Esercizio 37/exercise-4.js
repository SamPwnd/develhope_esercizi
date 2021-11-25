class BankAccount {
    constructor(importo){
        this.conto = importo;
    }
    deposit(fondi){
        this.conto+=fondi;
    }
    withdraw(rit){
        this.conto-=rit;
    }
    view(){
        console.log(this.conto);
    }
}

const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(800);
bankAccount.view();