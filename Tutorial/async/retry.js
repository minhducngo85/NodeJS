var async = require('async');
var count = 0;
var functionData = { some: 'data' };
var myFunction = function (callback, results) {
    console.log(++count);
    process.nextTick(function () {
        return callback({ message: 'this failed' }, null);
        callback(null, { message: 'this succeeded' });
    });
};

async.retry({ times: 10, interval: 1000 }, 

function (callback, results) {
    console.log(++count);
    process.nextTick(function () {
        return callback({ message: 'this failed' }, null);
        callback(null, { message: 'this succeeded' });
    });
}, 


function (err, results) {
    if (err) {
        console.log("Err:", err);
    } else {
        console.log("results:", results);
    }
    console.log("===================================")
    console.log("Async function finished processing")
    return;
});