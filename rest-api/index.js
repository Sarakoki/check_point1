var express = require('express');
var bodyParser = require('body-parser');
var Users = require('./models/users');
var path = require('path')
var app = express();
app.use(bodyParser.json());
app.use('/', express.static(path.join(__dirname, 'public')))


// Do not touch this invocation of the `listen` method
app.listen('8888', function () {
  console.log('listening on 8888');
});

app.get('/',function(err,data) {
  
})
// Do not touch the exports object
module.exports = app;

