// Creating a server
import http from "http";
import fs from "fs";

var createServer = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/html" });
  var myReadStream = fs.createReadStream("readme.html", "utf8");
  var myWriteStream = fs.createWriteStream("./output.txt");
  myReadStream.pipe(res);
  myReadStream.pipe(myWriteStream);
});

createServer.listen(8080);
//console.log(req);
