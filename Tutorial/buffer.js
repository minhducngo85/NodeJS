//Pure JavaScript is Unicode friendly, but it is not so for binary data. While dealing with TCP streams or the file system, it's necessary to handle octet streams. 

// write: buf.write(string[, offset][, length][, encoding])
buf = new Buffer(256);
len = buf.write("simple buffer text");
console.log("Octets written: " + len);


// read: buf.toString([encoding][, start][, end])
buf = new Buffer(26);
for (var i = 0; i < 26; i ++) {
    buf[i] = i + 97;
}
console.log(buf.toString('ascii'));
console.log(buf.toString('ascii',0,5));
console.log(buf.toString('utf-8',0,10));
console.log(buf.toString(undefined,0,10)); // encoding default is utf-8

// covnert buffer to JSON
// buf.toJSON()
console.log("--------------json------------");
var buf = new Buffer('Simply Easy Learning');
var json = buf.toJSON(buf);

console.log(json);


// concat:Buffer.concat(list[, totalLength])
console.log("--------------concat------------");
var buffer1 = new Buffer('TutorialsPoint ');
var buffer2 = new Buffer('Simply Easy Learning');
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log("buffer3 content: " + buffer3.toString());

//compare: buf.compare(otherBuffer);
console.log("--------------compare------------");
var buffer1 = new Buffer('ABC');
var buffer2 = new Buffer('ABCD');
var result = buffer1.compare(buffer2);

if(result < 0) {
   console.log(buffer1 +" comes before " + buffer2);
}else if(result == 0){
   console.log(buffer1 +" is same as " + buffer2);
}else {
   console.log(buffer1 +" comes after " + buffer2);
}

//copy: uf.copy(targetBuffer[, targetStart][, sourceStart][, sourceEnd])
var buffer1 = new Buffer('ABC');
console.log("--------------copy------------");
var buffer2 = new Buffer(3);
buffer1.copy(buffer2);
console.log("buffer2 content: " + buffer2.toString());

// clice (sub): buf.slice([start][, end])
console.log("--------------sub buffer------------");
var buffer1 = new Buffer('TutorialsPoint');
var buffer2 = buffer1.slice(0,9);
console.log("buffer2 content: " + buffer2.toString());

//length of the buffer
console.log("--------------buffer length------------");
var buffer = new Buffer('TutorialsPoint');

console.log("buffer length: " + buffer.length);