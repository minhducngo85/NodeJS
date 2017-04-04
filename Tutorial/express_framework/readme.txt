Express Overview

Express is a minimal and flexible Node.js web application framework that provides a robust set of features to develop web and mobile applications. It facilitates the rapid development of Node based Web applications. Following are some of the core features of Express framework −

    Allows to set up middlewares to respond to HTTP Requests.

    Defines a routing table which is used to perform different actions based on HTTP Method and URL.

    Allows to dynamically render HTML Pages based on passing arguments to templates.

Installing Express

Firstly, install the Express framework globally using NPM so that it can be used to create a web application using node terminal.

$ npm install express --save

The above command saves the installation locally in the node_modules directory and creates a directory express inside node_modules. You should install the following important modules along with express −

    body-parser − This is a node.js middleware for handling JSON, Raw, Text and URL encoded form data.

    cookie-parser − Parse Cookie header and populate req.cookies with an object keyed by the cookie names.

    multer − This is a node.js middleware for handling multipart/form-data.

$ npm install body-parser --save
$ npm install cookie-parser --save
$ npm install multer --save


Response methods

The methods on the response object (res) in the following table can send a response to the client, and terminate the request-response cycle. If none of these methods are called from a route handler, the client request will be left hanging.
Method 	Description
res.download() 	Prompt a file to be downloaded.
res.end() 	End the response process.
res.json() 	Send a JSON response.
res.jsonp() 	Send a JSON response with JSONP support.
res.redirect() 	Redirect a request.
res.render() 	Render a view template.
res.send() 	Send a response of various types.
res.sendFile() 	Send a file as an octet stream.
res.sendStatus() 	Set the response status code and send its string representation as the response body.
