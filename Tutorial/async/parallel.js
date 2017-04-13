var async = require('async');


async.parallel({
    one: function (callback) {
        console.log("function 1");
        for (var i = 0; i < 100; i++) {
            console.log(i);
        }
    },
    two: function (callback) {
        console.log("function 2");
         setTimeout(function () {
            callback(null, 'abc\n');
        }, 3000);
    }
}, function (err, results) {
    // results is now equals to: {one: 'abc\n', two: 'xyz\n'}
    console.log("Result: " + JSON.stringify(results));
});
