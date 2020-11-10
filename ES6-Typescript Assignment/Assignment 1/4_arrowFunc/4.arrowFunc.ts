//ques4
let names = ["Tom", "Ivan", "Jerry"];
let objectArray = (arr) => {
  let temp = {};
  for(let i=0; i<arr.length; i++){
    temp[i] = `name: '${arr[i]}', length: ${arr[i].length}`;
  }
  return temp;
}
var newArr = objectArray(names);
console.log(newArr);