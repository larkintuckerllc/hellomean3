var winesControllers = angular.module('winesControllers', []);

winesControllers.controller('WinesListCtrl', ['$scope', 'Wines', 'Wineries', function ($scope, Wines, Wineries) {
	$scope.wines = Wines.query(
                {},
                function() {
                        // SUCCESS
                },
                function() {
                        // ERROR
                        // TODO Generate some network error message;
                }
	);
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
	$scope.addWine = function() {
		var newWine = new Wines({name: $scope.wineName, winery: $scope.winery_Id});
		newWine.$save({},
			function() {
				// SUCCESS
				$scope.wines.push(newWine);
			},
			function() {
				// ERROR
				// TODO Generate some network error message;
			}
		);
		$scope.wineName = '';
		$scope.winery_Id = '';
	};
}]);

winesControllers.controller('WinesDetailCtrl', ['$scope', '$routeParams', 'Wines', 'Wineries', function($scope, $routeParams, Wines, Wineries) {
	$scope.wine = Wines.get({_id: $routeParams._id}, 
		function() {
			// SUCCESS
			$scope.winery = Wineries.get({_id: $scope.wine.winery},
				function() {
					// SUCCESS
					console.log("SUCCESS");
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
	$scope.updateWine = function() {
		$scope.wine.$update({}, 
			function() {
				// SUCCESS
			},
			function() {
				// ERROR
				// TODO Generate some network error message;
			}
		);
	};
	$scope.deleteWine = function() {
		$scope.wine.$delete({}, 
			function() {
				// SUCCESS
				window.location.href = '#/wines';	
			},
			function() {
				// ERROR
				// TODO Generate some network error message;
			}
		);
	};
}]);
