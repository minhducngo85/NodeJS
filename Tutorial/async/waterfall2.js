var async = require('async');

async.waterfall(
    [
        // i. check if headers.txt exists
        function (callback) {
            console.log('function 1');
            var versionMetaData = "versionMetaData"
            var statusCode = 200;
            statusCode == 200 ? callback(null, versionMetaData) : callback(statusCode);
        },

        // ii. fetch the HTTP headers
        function (versionMetaData, callback) {
            console.log(versionMetaData);
            var statusCode = 200;
            var projectMetaData = "projectMetaData"
            statusCode == 200 ? callback(null, versionMetaData, projectMetaData) : callback(statusCode);
        },

        // iii. write the headers to headers.txt
        function (versionMetaData, projectMetaData, callback) {
            console.log(versionMetaData, ", ", projectMetaData);
            var statusCode = 200;
            var createdBy = "createdBy";
            statusCode == 200 ? callback(null, versionMetaData, projectMetaData, createdBy) : callback(statusCode);
        }
    ], function (err, versionMetaData, projectMetaData, createdBy) {
        if (!err) {
            console.log(versionMetaData, ", ", projectMetaData, ", ", createdBy);
        }
    }
);