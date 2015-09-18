module.exports = function(){
	return function($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('home', {
				url:'/home',
				templateUrl: '/home.html',
				controller: 'homeController'
			});
	};
};

