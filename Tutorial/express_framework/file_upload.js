//npm install multer --save 
var express = require('express');
var app = express();
var fs = require("fs");
var bodyParser = require('body-parser');

/**
 * Multer adds a body object and a file or files object to the request object. 
 * The body object contains the values of the text fields of the form, the file or files object contains the files uploaded via the form.
 */
var multer  = require('multer');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
var upload = multer({ dest: './uploads/' }); // relative path to file_upload.js

app.get('/index.html' ,function (req, res) {
    res.sendFile(__dirname + "/" + "file_upload_index.html");
})

app.post('/file_upload', upload.single('file') , function (req, res) {
    //console.log(req.file.name);
    console.log("name:" + req.file.name);
   console.log("path: " + req.file.path);
   console.log("type: " + req.file.type);
    console.log(req.body); //form fields
	console.log(req.file); //form files
    var file = __dirname + "/uploads/" + req.file.originalname;

    fs.readFile(req.file.path, function (err, data) {
        fs.writeFile(file, data, function (err) {
            if (err) {
                console.log(err);
            } else {
                response = {
                    message: 'File uploaded successfully',
                    filename: req.file.originalname
                };
            }
            console.log(response);
            res.end(JSON.stringify(response));
        });
    });
})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})