var fs = require('fs')
var concat = require('concat-stream')
var arr = concat(function(data) {console.log(data);});

//reading contents from file and writing it to concat method
arr.write(fs.readFileSync('data.txt','utf-8').split(" "))
arr.write(fs.readFileSync('data2.txt','utf-8').split(","))
arr.end()