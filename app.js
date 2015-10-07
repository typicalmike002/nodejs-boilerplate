var express = require('express');
var fs = require('fs');
var path = require('path');
var logger = require('./utils/logger');
var morgan = require('morgan');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');


var app = express();


//Morgan Logger
var logDirectory = __dirname + '/log';
if (!fs.existsSync(logDirectory)) { fs.mkdirSync(logDirectory); }

app.use(morgan('combined', {stream: logger.stream}));


//Sets Application Paths
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(favicon(path.join(__dirname, 'public/img', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


//Error Handler
app.use(function(err, req, res, next) {
	res.status(err.status || 500);
	res.render('error', {
		message: err.message,
		error: {}
	});
});

//Launch Application
app.listen(app.get('port'), function() {
    console.log('Server has started on http://localhost:' +
        app.get('port') + '; press Ctrl-c to terminate');
});

module.exports = app;