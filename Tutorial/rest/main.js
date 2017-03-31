var express = require('express');
var app = express();
var fs = require("fs");

//show list of user
app.get('/listUsers', function (req, res) {
    fs.readFile("./users.json", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
})


// get user details
app.get('/findUser/:uid', function (req, res) {
    fs.readFile("./users.json", 'utf8', function (err, data) {
        users = JSON.parse(data);
        var key = "user" + req.params.uid;
        console.log("user key = " + key);
        console.log(users[key]);
        res.end(JSON.stringify(users[key]));
    });
})

//add user
var users = {
    "user4": {
        "name": "mohit",
        "password": "password4",
        "profession": "teacher",
        "id": 4
    }
}
app.post('/addUser', function (req, res) {
    // First read existing users.
    fs.readFile("./users.json", 'utf8', function (err, data) {
        data = JSON.parse(data);
        data["user4"] = users["user4"];
        console.log(data);
        res.end(JSON.stringify(data));
    });
})

//delete 
app.delete('/deleteUser/:uid', function (req, res) {

    // First read existing users.
    fs.readFile("./users.json", 'utf8', function (err, data) {
        data = JSON.parse(data);
        delete data["user" + req.params.uid];
        console.log(data);
        res.end(JSON.stringify(data));
    });
})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)

})