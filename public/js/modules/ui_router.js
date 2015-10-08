var ui_router = function ($locationProvider, $urlRouterProvider, $stateProvider) {

	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});

	$urlRouterProvider.otherwise('home');
	
	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: '/js/modules/home/home_template.html',
			controller: 'MainCtrl'
		})
		.state('about', {
			url: '/about',
			templateUrl: '/js/modules/about/about_template.html',
			controller: 'AboutCtrl'
		});
};

module.exports = ui_router;