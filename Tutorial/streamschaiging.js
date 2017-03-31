/**
 * Chaining is a mechanism to connect the output of one stream to another stream and create a chain of multiple stream operations. It is normally used with piping operations. Now we'll use piping and chaining to first compress a file and then decompress the same.
 */
var fs = require("fs");
var zlib = require('zlib');

// Compress the file input.txt to input.txt.gz
var writerStream = fs.createWriteStream('input_compressed.txt.gz');
fs.createReadStream('input.txt')
    .pipe(zlib.createGzip())
    .pipe(writerStream);

console.log("File Compressed.");



//depress
// Decompress the file input.txt.gz to input.txt
var frs = require("fs");
var zrlib = require('zlib');
var decompressFunction = function decompressFile() 
 {
    frs.createReadStream('input_compressed.txt.gz')
   .pipe(zrlib.createGunzip())
   .pipe(frs.createWriteStream('input_decompressed.txt'));
}

writerStream.on('finish', decompressFunction);
  
console.log("File Decompressed.");