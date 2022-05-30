import express from "express";
import cookieSession from "cookie-session";
//import cookieParser from "cookie-parser";


//var cookieSession = require('cookie-session')
//var express = require('express')

var app = express()

//app.set('trust proxy', 1) // trust first proxy

app.use(cookieSession({
  name: 'codegirlssession',
  keys: ["keygrip"]
}))

app.get('/', function (req, res, next) {
  // Update views
  req.session.views = (req.session.views || 0) + 1
  // Write response
  res.end(req.session.views + ' views')
})
app.get('/destroyed', function (req, res, next) {
  req.session = null;
  res.end("session is destroyed");
  req.session.regenerate = req.session.views;
})

app.listen(3000)