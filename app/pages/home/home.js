'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'pages/home/home.html',
    controller: 'homeCtrl'
  });
}])

.controller('homeCtrl', ['$scope','$http','$location', function($scope,$http,$location) {
$scope.categorie = true;
$scope.demands_data = {};
$http({
    method: 'GET',
    url:'http://localhost/finalats/web/app_dev.php/demandes'}).then(function success(response) {
        $scope.demands_data = JSON.parse(JSON.stringify(response.data))
    }, function error(response) {
        console.log("ERROR! ")
    });

$scope.loggedin = function () {
    return (localStorage.getItem('uid') != null);
};
$scope.signout = function () {
    localStorage.clear();
    $location.path('/')
}
}]);