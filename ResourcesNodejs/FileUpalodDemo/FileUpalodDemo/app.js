

var http = require('http');
var fs = require('fs');

http.createServer(function(request,response){

    var destinationFile = fs.createWriteStream("abc.md");
    request.pipe(destinationFile);
    var fileSize = request.headers['content-length'];
 var uploadedBytes = 0 ;
 
request.on('data',function(d){
 
 uploadedBytes += d.length;
 var p = (uploadedBytes/fileSize) * 100;
 response.write("Uploading " + parseInt(p)+ " %\n");
 
});



 
 }).listen(8080);
