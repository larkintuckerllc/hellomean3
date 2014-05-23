var wineriesControllers = angular.module('wineriesControllers', []);

wineriesControllers.controller('WineriesListCtrl', ['$scope', 'Wineries', function ($scope, Wineries) {
	$scope.wineries = Wineries.query(
		{},	
		function() {
			// SUCCESS
		},
		function() {
			// ERROR
			// TODO Generate some network error message;
		}
	);
	$scope.addWinery = function() {
		var newWinery = new Wineries({name: $scope.wineryName});
		newWinery.$save({},
			function() {
				// SUCCESS
				$scope.wineries.push(newWinery);
			},
			function() {
				// ERROR
				// TODO Generate some network error message;
			}
		);
		$scope.wineryName = '';
	};
}]);

wineriesControllers.controller('WineriesDetailCtrl', ['$scope', '$routeParams', 'Wineries', 'Wines', function($scope, $routeParams, Wineries, Wines) {
	$scope.winery = Wineries.get({_id: $routeParams._id}, 
		function() {
			// SUCCESS
			$scope.wines = Wines.query(
				{winery: $routeParams._id},
                		function() {
                    			    // SUCCESS
              			},
            			function() {
                     			   // ERROR
                     			   // TODO Generate some network error message;
               			}
			);
		},
		function() {
			// ERROR
			// TODO Generate some network error message;
		}
	);
	$scope.updateWinery = function() {
		$scope.winery.$update({}, 
			function() {
				// SUCCESS
			},
			function() {
				// ERROR
				// TODO Generate some network error message;
			}
		);
	};
	$scope.deleteWinery = function() {
		$scope.winery.$delete({}, 
			function() {
				// SUCCESS
				window.location.href = '#/wineries';	
			},
			function() {
				// ERROR
				// TODO Generate some network error message;
			}
		);
	};
}]);
