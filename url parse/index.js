import http from "http";
//import fs from "fs";
//import url from "url";

var server = http.createServer((_req, _res) => {
  var myUrl = new URL("https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash");
  console.log(myUrl.hostname);
  console.log(myUrl.host);
  console.log(myUrl.pathname);
  console.log(myUrl.port);
  console.log(myUrl.hash);
});
server.listen(8080);
