// how to use core modules of node

// use node core module called - file system 
const fs = require('fs');
const os = require('os');


fs.writeFileSync("data.txt", "Hello");
fs.appendFileSync("data.txt", " world!");

const data = fs.readFileSync("data.txt");
console.log(data.toString());

console.log(os.freemem());      // get free memory of server
console.log(os.totalmem());     // get total memory of server

