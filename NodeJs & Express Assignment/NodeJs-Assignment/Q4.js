var fs = require("fs");

var data = "hey ho! let's go"
fs.writeFile("write.txt", data, ()=>{
  console.log("The file was saved");
});


// fs.writeFileSync("write.txt", data);
// console.log("The file was saved");