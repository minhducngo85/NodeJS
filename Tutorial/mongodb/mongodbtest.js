require("./constant.js");
//lets require/import the mongodb native drivers.
var mongodb = require('mongodb');

// create mongo db client to work with mondo db server
var mongo_client = mongodb.MongoClient;

//connect to serverM
mongo_client.connect(global.mongodbUrl, function (err, db) {
    if (err) {
        console.log('undable to connect to the mongo db server. Error:', err);
    } else {
        //HURRAY!! We are connected. :)
        console.log('Connection established to', global.mongodbUrl);

        // do some work here with the database.
        // get the documents collection
        var collection = db.collection('users');

        // clean up 
        // Remove all the document
         collection.remove();

        // creates users
        var user1 = { name: 'modulus admin', age: 42, roles: ['admin', 'user', 'morderator'] };
        var user2 = { name: 'modulus user', age: 22, roles: ['user'] };
        var user3 = { name: 'modulus super admin', age: 92, roles: ['super-admin', 'users', 'morderator'] };

        //insert into db 
        collection.insert([user1, user2, user3], function (err, result) {
            if (err) {
                console.log("cannot insert into db. Err: " + err);
            } else {
                console.log("Inserted %d documents into the \"users\" collection. The documents inserted with \"_id\" are:", result.length, result);
            }
        });

        //update
        // Insert some users
        collection.update({ name: 'modulus user' }, { $set: { enabled: false } }, function (err, numUpdated) {
            if (err) {
                console.log(err);
            } else if (numUpdated) {
                console.log('Updated Successfully %d document(s).', numUpdated);
            } else {
                console.log('No document found with defined "find" criteria!');
            }
        });

        // Querry users
        collection.find({ name: 'modulus user' }).toArray(function (err, result) {
            if (err) {
                console.log(err);
            } else if (result.length) {
                console.log('Found:', result);
            } else {
                console.log('No document(s) found with defined "find" criteria!');
            }
        });

        //Close connection
        db.close();
    }
});