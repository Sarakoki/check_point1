var _ = require("underscore");

// The seeded state of our in-memory "database"
var users = [
  {
    id: 1,
    name: "Taka",
    email: "taka@taka.com"
  },
  {
    id: 2,
    name: "Nayo",
    email: "nayo@nayo.com"
  },
  {
    id: 3,
    name: "Amrit",
    email: "amrit@amrit.com"
  }
];

var nextId = 4;

var getNextId = function() {
  return nextId++;
};

// Public methods. Build out these functions as necessary
// The first two have been done for you!
exports.getAll = function() {
  return users;
};

exports.setAll = function(newUsers) {
  users = newUsers;
  nextId = newUsers.length + 1;
  return newUsers;
};

exports.getOne = function(id) {
  users.findOne({ id: id }, function(err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });
};

exports.addOne = function(user) {
  var id = user.id;
  var name = user.name;
  var email = user.email;
  var newUser = {
    id: id,
    name: name,
    email: email
  };
  var user = new user(newUser);
  user.save();
};

exports.updateOne = function(id, newProperties) {
  users.findOneAndUpdate({ id: id }, newProperties, function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log("updated");
    }
  });
};

exports.deleteOne = function(id) {
  user.deleteOne({ id: id }, function(err) {
    if (err) return handleError(err);
  });
};
