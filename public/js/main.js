//Project Dependencies.
require('./bower_components/angular/angular.js');

//Load our state and controllers.
var states = require('./modules/states.js');
var homeController = require('./modules/controllers/homeController.js');


//Begin our main.js app
var app = angular.module('nodejs-boilerplate', []);

app.config([
	'$stateProvider',
	'$urlRouterProvider',
	states
]);

app.controller('homeController', [
	'$scope',
	homeController
]);
