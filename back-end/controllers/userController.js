var user = require("../models/User.js");
var fs = require("fs");

// Given the name of a user, retrieve their record from the database
exports.getUserByName = function(name, callback) {
  // TODO
  user.findOne({ name: name }, function(err, data) {
    if (err) {
      console.log(err);
    } else {
      res.send(data);
    }
  });
};

// Given the name of a user, update their `email` property
exports.updateEmailByName = function(name, newEmail, callback) {
  // TODO
  user.updateOne({ name: name }, { newEmail: newEmail }, function(err, data) {
    if (err) {
      console.log(err);
    } else {
      res.send(data);
    }
  });
};

// Read all users from the database at once
exports.readAllUsers = function(callback) {
  // TODO
  fs.readFile(function(err, data) {
    User.find({}, function(err, data) {
      if (err) {
        console.log(err);
      } else {
        res.send(data);
      }
    });
  });
};
