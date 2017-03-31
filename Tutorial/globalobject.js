// The __filename represents the filename of the code being executed.
console.log( __filename );
// The __dirname represents the name of the directory that the currently executing script resides in.
console.log( __dirname );


// calling the method after 2 seconds
function printHello(){
   console.log( "Hello, World!");
}
setTimeout(printHello, 2000);


// clear clearTimeout
function printHelloWithClearTimeout(){
   console.log( "Hello, World! SHould not be called.");
}
var t = setTimeout(printHelloWithClearTimeout, 2000);
clearTimeout(t);


// setInterval: 
function printHelloInterval(){
   console.log( "Hello, World Interval!");
}
// Now call above function after 2 seconds
setInterval(printHelloInterval, 2000);