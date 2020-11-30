var fs = require("fs");
let str = process.argv.slice(2);

var data = "";
for(let i of str){
  data = data+i+" ";
}

//fs.writeFileSync("stringParameter.txt", data);
//console.log("The file was saved");

//extra 1
fs.writeFileSync(`${str[0]}`, data);

// more extra
console.log("The file was saved");
fs.readFile(str[0], "utf8", (err,data)=>{
  console.log(data);
})

