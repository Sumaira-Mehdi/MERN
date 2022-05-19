import express from "express";

var app = express();

app.set("view engine", "ejs");

// index.ejs page
app.get("/", function (req, res) {
  var karachi = {
    name: "karachi",
    famousplaces: ["kemari", "larkana", "zoo"]
  };
  var lahore = {
    name: "lahore",
    famousplaces: ["abc", "xyz", "efg"]
  };
  var tagline = "pakistan cities and their famous places";
  console.log(karachi.name);

  res.render("index", {
    karachi: karachi,
    tagline: tagline,
    lahore: lahore
  });
  // console.log(karachi.name);

});
app.listen(8000);
console.log("Server is listening on port 8080");
