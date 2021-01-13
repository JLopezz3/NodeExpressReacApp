// npm run dev = start
const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
require("./models/User");
require("./services/passport"); //order of require statements follow order of operations.

mongoose.connect(keys.mongoURI);

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, //has to be 30 days in milliseconds
    keys: [keys.cookieKey],
  })
);

app.use(passport.initialize());
app.use(passport.session());

//calling authRoutes function with app object
require("./routes/authRoutes")(app);

// listen to env PORT for production, otherwise go to 5000 for localhost.
const PORT = process.env.PORT || 5000;
app.listen(PORT);
