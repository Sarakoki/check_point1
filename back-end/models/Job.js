// TODO: Create and export a mongoose model called `Job` that follows the description in the README
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/Weather");

var db = mongoose.connection;

db.on("error", function() {
  console.log("mongoose connection error");
});

db.once("open", function() {
  console.log("mongoose connection successfull");
});

const JobSchema = mongoose.Schema({
  company: String,
  title: String,
  description: String,
  postedDate: Date,
  Salary: Number
});

var Job = mongoose.model("Job", JobSchema);

module.exports.Job = Job;
