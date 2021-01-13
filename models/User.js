const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
});

//create 'users' collection, with userSchema
mongoose.model("users", userSchema);
