//Project Dependencies
var express = require('express');
var fs = require('fs');
var path = require('path');
var logger = require('./utils/logger');
var morgan = require('morgan');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var compression = require('compression');

var routes = require('./routes/index');

var app = express();


//Morgan Logger
var logDirectory = __dirname + '/log';
if (!fs.existsSync(logDirectory)) { fs.mkdirSync(logDirectory); }

app.use(morgan('combined', {stream: logger.stream}));
logger.debug('Morgan is ready to log requests.');

//Compression
app.use(compression( { threshold: 0 }));


//Application Configuration
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

 
var oneDay = 86400000;
app.use(express.static(path.join(__dirname, 'public'), { maxAge: oneDay }));
app.use(favicon(path.join(__dirname, 'public/img', 'favicon.ico')));


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

//Launches Application
app.listen(app.get('port'), function() {
	logger.info('Server was started on: ' + new Date());
    console.log('Now live on http://localhost:' + app.get('port') + ' Press Ctrl-c to terminate');
});

module.exports = app;