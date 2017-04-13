var async = require('async');
var retryCount = 0;
var statusCode = 100;
var executionData = "executionData";


var async = require('async');
var count = 0;
var error = "Error message";

async.retry({ times: 10, interval: 1000 },

    function (callback) {
        console.log(++count);
        process.nextTick(function () {
            statusCode == 200 ? callback(null, { message: 'this succeeded' }) : callback(error, null);
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