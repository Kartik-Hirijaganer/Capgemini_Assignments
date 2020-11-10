//ques5
//a
let add = (a=5, b=5) => {
  return a+b;
};
console.log(add());

//b
let userFriends = (username, ...friends) => {
  return `Name: ${username}, list of his friends: ${friends}`;
};
let frds = ["alex", "mike", "george"];
console.log(userFriends("Max", frds));

//c
let names = ["mike", "alex", "gorge", "max", "vasili"];
let printCapitalNames = (...x) => {
  for(let na of x){
    console.log(na.toUpperCase());
    ;
  }
};
printCapitalNames(...names);