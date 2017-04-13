var async = require('async');


var statusCode = 100;
var versionMetaData = "version value";
var projectMetaData = { "key": "projectkey", "name": "projectname" };
var modifiedByData = "modifiedByData";
var createdByData = "createdByData value";
var testcycleData = {};
var err = "! 200";
async.waterfall([
    function (callback) {
        statusCode == 200 ? callback(null, versionMetaData) : callback([statusCode, err]);
    },
    function (versionMetaData, callback) {
        statusCode == 200 ? callback(null, versionMetaData, projectMetaData) : callback([statusCode, err]);

    },
    function (versionMetaData, projectMetaData, callback) {
        statusCode == 200 ? callback(null, versionMetaData, projectMetaData, createdByData) : callback([statusCode, err]);

    },
    function (versionMetaData, projectMetaData, createdByData, callback) {
        statusCode == 200 ? callback(null, versionMetaData, projectMetaData, createdByData, modifiedByData) : callback([statusCode, err]);

    },
], function (err, versionMetaData, projectMetaData, createdByData, modifiedByData) {
    if (err) {
        console.error("Error1 in getTestCyclesData: " + err);
        return;
    } else {
        console.log("End: ", versionMetaData);
        console.log("End: ", projectMetaData);
        console.log("End: ", createdByData);
        console.log("End: ", modifiedByData);
    }

    Object.assign(testcycleData, {
        "projectName": projectMetaData.name,
        "projectKey": projectMetaData.key,
        "versionName": versionMetaData.name,
        "createdBy": createdByData,
        "modifiedBy": modifiedByData,
    })

    console.log("testcycleData #1: ", JSON.stringify(testcycleData));
}
);