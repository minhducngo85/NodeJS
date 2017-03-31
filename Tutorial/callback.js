// blocking code
var fs = require("fs");
var data = fs.readFileSync('input.txt');
console.log(data.toString());
console.log("Blocking Code Programm ended");

// none blocking code
console.log("---------------------------------------------");
console.log("None Blocking Code Programm started");

//In Node Application, any async function accepts a callback as the last parameter and a callback function accepts an error as the first parameter.
fs.readFile('input.txt', function(err, data){
    if (err) {
        return console.error(err);
    } else {
        console.log(data.toString());
    }
});
console.log("None Blocking Code Programm ended");