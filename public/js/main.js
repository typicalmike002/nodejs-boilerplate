require('./bower_components/angular/angular.js');
require('./bower_components/angular-ui-router/release/angular-ui-router.js');

var app = angular.module('app', ['ui.router']);

var ui_router = require('./modules/ui_router.js');
app.config(['$locationProvider','$urlRouterProvider','$stateProvider',ui_router]);


var home_controller = require('./modules/home/home_controller');
app.controller('MainCtrl', ['$scope',home_controller]);


var about_controller = require('./modules/about/about_controller');
app.controller('AboutCtrl', ['$scope',about_controller]);