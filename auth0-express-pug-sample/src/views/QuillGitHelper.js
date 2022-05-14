const fs = require('fs');

fs.readFile("tt.txt",(err, data) => { 
    console.log(data);
  });