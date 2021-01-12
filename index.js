const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const app = express();

// new GoogleStrategy = creates new instance of google passport strategy
//clientID 748956231785-l68ku00tq9nc64bpcqkkrkcva8md8hg6.apps.googleusercontent.com
// clientSecret 3_YIkgMR0eI-P0pFL7hNBAy4
passport.use(new GoogleStrategy());

// listen to env PORT for production, otherwise go to 5000 for localhost.
const PORT = process.env.PORT || 5000;
app.listen(PORT);
