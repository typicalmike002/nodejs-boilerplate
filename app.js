var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var logger = require('./utils/logger');

var routes = require('./routes/index');
var users = require('./routes/users');


var app = express();


logger.debug('Setting ejs as view engine');
app.set('view engine', 'ejs');

logger.debug('Setting views as folder');
app.set('views', path.join(__dirname, 'views'));

logger.debug('Setting Public folder');
app.use(favicon(path.join(__dirname, 'public/img', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

logger.debug('Overriding Express logger');
app.use(morgan({ 'combined': logger.stream }));

//Error Handler
app.use(function(err, req, res, next) {
	logger.log('ERROR', 'Something wrong with an XHR request', err.stack);
	res.status(err.status || 500);
	res.render('error', {
		message: err.message,
		error: {}
	});
});


app.listen(app.get('port'), function() {
	logger.info('nodejs-boilerplate has begun');
    console.log('Server has started on http://localhost:' +
        app.get('port') + '; press Ctrl-c to terminate');
});

module.exports = app;