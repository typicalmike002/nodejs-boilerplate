var ui_router = function ($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: 'js/modules/home/home_template.html',
			controller: 'MainCtrl'
		})
		.state('about', {
			url: '/about',
			templateUrl: 'js/modules/about/about_template.html',
			controller: 'AboutCtrl'
		});

		$urlRouterProvider.otherwise('home');
};

module.exports = ui_router;