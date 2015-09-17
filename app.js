var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');


var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(favicon(path.join(__dirname, 'public/images', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

app.listen(app.get('port'), function() {
    console.log('Server has started on http://localhost:' +
        app.get('port') + '; press Ctrl-c to terminate');
});

module.exports = app;