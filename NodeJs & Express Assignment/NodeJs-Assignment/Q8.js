var fs = require("fs");

fs.readFile("integerList.txt", "utf8",(err,data)=>{
  let sum = 0;
  let temp = data.split(",");
  for(let i of temp){
    sum += parseInt(i);
  }
  console.log(sum);
});