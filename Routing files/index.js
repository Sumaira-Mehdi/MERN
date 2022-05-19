import express from "express";
//import path from "path";
const myWeb = express();
const port = 3000;

myWeb.get("/contact/:name/forms/:formId", (req, res) => {
  res.send("hello" +  " " +  req.params.name.toUpperCase() +  " " +  "your id is" +  " " +  req.params.formId
  );
  console.log(req.url.slice(1));
});

myWeb.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

