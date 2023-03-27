const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  password: String,
});


const UserModel = new mongoose.model("userDetail",userSchema);

module.exports = UserModel;