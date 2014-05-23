angular.module('myApp').config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		when('/', {
      	  		templateUrl: 'views/index.html',
       			controller: 'IndexCtrl'
      		}).
      		otherwise({
       			redirectTo: '/'
      		});
}]);
