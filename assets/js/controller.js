var beirutController = angular.module('beirutController', []);

beirutController.controller('CandidatePositionController',['$scope','$http','$routeParams', function($scope,$http,$routeParams){
	changeTitleHeader("Recruitment Center");
}]);

beirutController.controller('PositionController',['$scope','$http','$routeParams', function($scope,$http,$routeParams){
	changeTitleHeader("Jobs Management");
	$http.get('assets/json/positions.json').success(function(response){
		// console.log(response);
		$scope.positionsContent = response.content;
		console.log($scope.positionsContent);
	});

	$scope.clickPosition = function(id){
		console.log($scope.itr);
		$scope.activeData = $scope.positionsContent[id];
		console.log($scope.activeData);
	}

}]);
