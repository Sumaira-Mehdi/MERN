import express from "express";
import passport from "passport";
import session from "express-session";
import FacebookStrategy from "passport-facebook";
//import passport from "passport-session";
import passportfacebook from "passport-facebook";
var app = express();
const PORT = 8000;

app.use(session({
    name: 'codegirlssession',
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  }))

  passport.use(new FacebookStrategy({
    clientID: 763424001688931,
    clientSecret:"1ed382a32d4051498a5af00c643e25dd" ,
    callbackURL: "http://localhost:8000/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile) {
    console.log(profile);
      return profile;
  }
));

app.get('/auth/facebook',
  passport.authenticate('facebook'));

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { scope: ['email'] }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });


app.listen(PORT);