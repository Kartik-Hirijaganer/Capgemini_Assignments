var fs = require("fs");


fs.readFile("search.txt", "utf8", function(err, data){
  var splitted = data.split("jhon").length-1;
  console.log(splitted);
  // console.log(data.split("jhon"));
});
