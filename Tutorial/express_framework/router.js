//Use the express.Router class to create modular, 
// mountable route handlers. A Router instance is a complete middleware and routing system; for this reason, it is often referred to as a “mini-app”.
var express = require('express')
var app = express();

var birds = require('./birds')

// ...

app.use('/birds', birds)

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)

})
