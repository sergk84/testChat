export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
	$locationProvider.html5Mode(true).hashPrefix('!');
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('login', {
			url      : '/',
			component: 'login'
		})
		.state('chat', {
			url      : '/chat',
			component: 'chat',
			resolve  : {authenticate: authenticate}
		});



	function authenticate($q, UserModel, $state, $timeout) {
		if (UserModel.isAuthenticated()) {
			return $q.when();
		} else {
			$timeout(function () {
				$state.go('login');
			},1);

			return $q.reject(false);
		}
	}

}
