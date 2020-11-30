const testFolder = './';
const fs = require('fs');


fs.readdir(testFolder, (err, files)=>{
  if(err){
    console.log("error");
  }
  else{
    files.forEach(file => {
      var stats = fs.statSync(file);
      if(stats.isFile()){console.log("File:"+file);}
      else{console.log("Directory:"+file);}
    })
  }
})



