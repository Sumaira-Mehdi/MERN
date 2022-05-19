//cREATING AN OBJECT AND SHOWING IT AS A STRING ON LOCAL HOST.

import http from "http";
//import fs from "fs";

var server = http.createServer((req, res) => {
  //var read = fs.readFile("content.js", "utf8", (err, data) => {
  //var myObj = toString(data);
  //res.end(myObj);

  const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
  res.end(JSON.stringify(person));
  //});
});
server.listen(8080);
