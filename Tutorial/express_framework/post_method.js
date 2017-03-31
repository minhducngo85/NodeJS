//var: is a local of the current module
var express = require("express");
var app = express();
var bodyParser = require('body-parser');

var urlencondedParser = bodyParser.urlencoded({extended: false});

app.use(express.static('public'));
app.get('/index.html', function(req, res){
    res.sendFile(__dirname + "/post_method_index.html");
});

app.post('/process_post', urlencondedParser, function(req, res){
  response = {
      first_name: req.body.first_name,
      last_name : req.body.last_name
  }
  console.log(response);
  res.end(JSON.stringify(response));
});

var server = app.listen(8081, function(){
    var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
});