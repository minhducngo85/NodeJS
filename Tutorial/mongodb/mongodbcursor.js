require("./constant.js");
//lets import the mongodb native drivers.
var mongodb = require('mongodb');

//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;



// Use connect method to connect to the Server
MongoClient.connect(global.mongodbUrl, function (err, db) {
    if (err) {
        console.log('Unable to connect to the mongoDB server. Error:', err);
    } else {
        //HURRAY!! We are connected. :)
        console.log('Connection established to', global.mongodbUrl);

        // Get the documents collection
        var collection = db.collection('users');

        //We have a cursor now with our find criteria
        var query = { name: new RegExp('^' + "modulus") };
        var cursor = collection.find(query);

        //We need to sort by age descending
        cursor.sort({ age: -1 });

        //Limit to max 10 records
        cursor.limit(10);

        //Skip specified records. 0 for skipping 0 records.
        cursor.skip(0);

        //Lets iterate on the result
        cursor.forEach(function (err, doc) {
            if (err) {
                console.log(err);
            } else {
                console.log('Fetched:', doc);
            }
        });

          //Close connection
        db.close();
    }
});