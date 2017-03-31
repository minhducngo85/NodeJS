var fs = require('fs');
var data = 'simply Easy Learning';

//create writable stream
var writerStream = fs.createWriteStream('output.txt');
writerStream.write(data,'UTF-8');
//mark the end of file
writerStream.end();

// Handle stream events --> finish, and error
writerStream.on('finish', function() {
    console.log("Write completed.");
});

writerStream.on('error', function(err){
   console.log(err.stack);
});

console.log("Program Ended");