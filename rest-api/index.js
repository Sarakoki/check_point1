var express = require("express");
var bodyParser = require("body-parser");
var Users = require("./models/users");
var path = require("path");
var app = express();
app.use(bodyParser.json());
app.use("/", express.static(path.join(__dirname, "public")));

app.get("/api/users", function(req, res) {
  Users.getAll(req, res);
  res.send();
});

app.post("/api/users", function(req, res) {
  Users.setAll(req, res);
  res.send();
});

app.get("/api/users/:id", function(req, res) {
  Users.getOne(req, res);
  res.send();
});

app.put("/api/users/:id", function(req, res) {
  Users.updateOne(req, res);
  res.send();
});

app.delete("/api/users/:id", function(req, res) {
  Users.deleteOne(req, res);
  res.send();
});

// Do not touch this invocation of the `listen` method
app.listen("8888", function() {
  console.log("listening on 8888");
});

app.get("/", function(err, data) {});
// Do not touch the exports object
module.exports = app;
