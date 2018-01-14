'use strict';

angular.module('myApp.Alldemands', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Alldemands', {
    templateUrl: 'pages/Alldemands/Alldemands.html',
    controller: 'AlldemandsCtrl'
  });
}])

.controller('AlldemandsCtrl', ['$scope','$http', function($scope,$http) {
    $scope.demands_data = {};
    $http({
        method: 'GET',
        url:'http://localhost/finalats/web/app_dev.php/demandes'}).then(function success(response) {
        $scope.demands_data = JSON.parse(JSON.stringify(response.data))
    }, function error(response) {
        console.log("ERROR! ")
    });
}]);