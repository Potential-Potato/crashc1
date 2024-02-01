const {people, age} = require('./people');
//require looks for the file and runs it 
//it doesnt work like import

console.log(people, age ); //empty

const os = require('os'); //built in object in javascript
console.log(os.platform(), os.homedir());
