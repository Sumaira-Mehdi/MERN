//Redirecting to different pages.

import http from "http";
import fs from "fs";
import url from "url";

var server = http.createServer(function (req, res) {
  //console.log(req.url);

  var myurl = url.parse(req.url, true).pathname;
  let result = myurl.slice(1);
  //console.log(myurl);
  console.log(result);

  if (req.url === "/home") {
    fs.readFile("index.html", "utf-8", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.end(data);
      }
    });
  } else if (req.url === "/about") {
    fs.readFile("about.html", "utf-8", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.end(data);
      }
    });
  } else if (req.url === "/contact") {
    fs.readFile("contact.html", "utf-8", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.end(data);
      }
    });
  } else if (req.url === "/") {
    res.end("HELLO AND WELCOME");
  } else {
    res.end("PAGE NOT FOUND");
  }
});

server.listen(8080);
