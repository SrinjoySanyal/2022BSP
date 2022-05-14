const fs = require('fs');
const git = require('simple-git');

fs.readFile("tt.txt",(err, data) => { 
    console.log(data);
  });

