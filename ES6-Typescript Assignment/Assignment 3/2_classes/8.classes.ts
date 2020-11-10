//ques8
class Account{
  constructor(id, name, balance){
    this.id = id;
    this.name = name;
    this.balance = balance;
  }

  static totalbalance(...accounts){
    let sum = 0;
    //console.log(accounts.balance);
    
    for(let i of accounts){
      sum += i.balance;
    }
    console.log(sum);
    //document.getElementById("result").innerHTML = sum;
    
  }
}

class SavingAccount extends Account{
  constructor(id, name, balance, interest){
    super(id, name, balance);
    this.interest = interest;
  }
}

class CurrentAccount extends Account{
  constructor(id, name, balance, cash_credit){
    super(id, name, balance);
    this.cash_credit = cash_credit;
  }
}

const savingAccount1 = new SavingAccount(1, "Mike", 1000, 5.12);
const savingAccount2 = new SavingAccount(2, "Max", 1000, 5.12);
const savingAccount3 = new SavingAccount(3, "Alex", 1000, 5.12);

const currentAccount1 = new CurrentAccount(1, "George", 1000, 5.50);
const currentAccount2 = new CurrentAccount(2, "Soul", 1000, 5.50);
const currentAccount3 = new CurrentAccount(3, "Vasili", 1000, 50);

const result = Account.totalbalance(savingAccount1, savingAccount2, savingAccount3, currentAccount1, currentAccount2, currentAccount3);