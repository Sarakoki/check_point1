var express = require('express');
var bodyParser = require('body-parser');
var path = require('path')
var app = express();

app.use('/', express.static(path.join(__dirname, './dist/index.html')))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
//app.set('/', __dirname + '/public');
app.set('views', __dirname + '/views');

app.engine('html', require('ejs').renderFile);


app.get('/', function(req, res){
    res.render('index.html');
});

// Do not touch this invocation of the `listen` method
app.set('port', (process.env.PORT || 3000));

app.listen('3000', function () {
    console.log('listening on 3000');
  });


// Do not touch the exports object
module.exports = app;
