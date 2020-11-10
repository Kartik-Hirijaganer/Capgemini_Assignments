//ques7
//a
let orgArr = ["max", "alex", "jhon", "mike"];
let [el1, el2, el3, el4] = orgArr;
console.log("Third element: "+el3);

//b
const organization = {
  cName : "xyz",
  address : [{state:"TX"}, {city:"atlas"}, {pincode:1234}]
}
const {cName, address} = organization;
console.log(address[2]);