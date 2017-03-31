var fs = require("fs");

console.log("Going to delete an existing file");
fs.unlink('input_compressed.txt.gz', function(err) {
   if (err) {
      return console.error(err);
   }
   console.log("File deleted successfully!");
});