var fs = require("fs");

// var content = fs.readFileSync("word.txt", "utf-8");
// console.log(content);

fs.readFile("word.txt", "utf8", function(err, data){
  console.log(data);
});