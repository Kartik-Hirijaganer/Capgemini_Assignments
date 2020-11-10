"use strict";
console.log("Hello");
// ques1
// const pi = 3.14;
// //pi = 10;
// console.log(pi);
//ques2
// if(1 < 0){
//   let greet = "Hello !";
//   document.write(greet);
// }
//document.write(greet);
// ques3
// var Order = {
//   id: 1234,
//   title: "Title",
//   price: 500,
//   printOrder: ()=>{
//     return Order;
//   },
//   getPrice: ()=>{
//     return Order.price;
//   }
// }
// //var res = Order.getPrice();
// let clone = Object.assign({}, Order);
// console.log(clone);
//ques4
// let names = ["Tom", "Ivan", "Jerry"];
// function objectArray(arr){
//   let temp = {};
//   for(let i=0; i<arr.length; i++){
//     temp[i] = `name: '${arr[i]}', length: ${arr[i].length}`;
//   }
//   return temp;
// }
// var newArr = objectArray(names);
// console.log(newArr);
//ques5
//a
// let add = (a=5, b=5) => {
//   return a+b;
// };
// console.log(add());
//b
// let userFriends = (username, ...friends) => {
//   return `Name: ${username}, list of his friends: ${friends}`;
// };
// let frds = ["alex", "mike", "george"];
// console.log(userFriends("Max", frds));
//c
// let names = ["mike", "alex", "gorge", "max", "vasili"];
// let printCapitalNames = (...x) => {
//   for(let na of x){
//     console.log(na.toUpperCase());
//     ;
//   }
// };
// printCapitalNames(...names);
//ques6
// let model = "A1D5S6";
// let deskNo = 1234;
// let fname = "Mike";
// let lname = "Tyson";
// let ticket = `Hello Sysnet,
// There is an issur with my laptop, resolve it ASAP.
// Specifications:
// laptopModel: ${model}
// DeskNo: ${deskNo}
// Name: ${fname} ${lname}`;
// console.log(ticket);
//ques7
//a
// let thirdElement = (...values)=>{
//   console.log(values[2]);
// };
// thirdElement(1,2,3,4,5);
//b
// const organization = {
//   cName : "xyz",
//   address : [{state:"TX"}, {city:"atlas"}, {pincode:1234}]
// }
// const {cName, address} = organization;
// console.log(address[2]);
//ques8
// class Account{
//   constructor(id, name, balance){
//     this.id = id;
//     this.name = name;
//     this.balance = balance;
//   }
//   static totalbalance(...accounts){
//     let sum = 0;
//     //console.log(accounts.balance);
//     for(let i of accounts){
//       sum += i.balance;
//     }
//     console.log(sum);
//   }
// }
// class SavingAccount extends Account{
//   constructor(id, name, balance, interest){
//     super(id, name, balance);
//     this.interest = interest;
//   }
// }
// class CurrentAccount extends Account{
//   constructor(id, name, balance, cash_credit){
//     super(id, name, balance);
//     this.cash_credit = cash_credit;
//   }
// }
// const savingAccount1 = new SavingAccount(1, "Mike", 1000, 5.12);
// const savingAccount2 = new SavingAccount(2, "Max", 1000, 5.12);
// const savingAccount3 = new SavingAccount(3, "Alex", 1000, 5.12);
// const currentAccount1 = new CurrentAccount(1, "George", 1000, 5.50);
// const currentAccount2 = new CurrentAccount(2, "Soul", 1000, 5.50);
// const currentAccount3 = new CurrentAccount(3, "Vasili", 1000, 50);
// const result = Account.totalbalance(savingAccount1, savingAccount2, savingAccount3, currentAccount1, currentAccount2, currentAccount3);
