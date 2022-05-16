import express from "express";
import path from "path";
import bodyParser from "body-parser";
import { dirname } from 'path';    //necessary for posting the response
import { fileURLToPath } from 'url'; //necessary for posting the response

const __dirname = dirname(fileURLToPath(import.meta.url)); //necessary for posting the response otherwise error occue dir-nae not defined


var myfile = express();

myfile.get("/", (req, res) => {
  res.sendFile("/contact.html", { root: "./" });
});
//myfile.use(bodyParser.json());
myfile.use(bodyParser.urlencoded({ extended: false }));

myfile.post("/welcome.html", function (req, res) {
  console.log(req.body);
  //console.log(__dirname);
  res.sendFile(path.join(__dirname + "/welcome.html"));
});
myfile.listen(3000);
