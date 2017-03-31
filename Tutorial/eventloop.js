// import events module
var events = require("events");

var eventEmitter = new events.EventEmitter();

// create event handler for 'connection'
var connectHandler = function connected(){
    console.log("connection successful");
    // fire data_received event
    eventEmitter.emit("data_received");
}
// bind connection event to with handler
eventEmitter.on('connection',connectHandler);

// bind data received event 
eventEmitter.on('data_received',function(){
    console.log("data received sucessfully");
});

// fire connection event
eventEmitter.emit("connection");

console.log("Programm ended");