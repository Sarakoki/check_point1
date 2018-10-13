// TODO: Create and export a mongoose model called `User` whose schema would handle an object like `exampleUser`
// var exampleUser = {
//   name: 'Taka',
//   email: 'taka@taka.com'
// };

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/Weather");

var db = mongoose.connection;

db.on("error", function() {
  console.log("mongoose connection error");
});

db.once("open", function() {
  console.log("mongoose connection successfull");
});

const UserSchema = mongoose.Schema({
  name: String,
  email: String
});

var User = mongoose.model("User", UserSchema);

module.exports.User = User;
