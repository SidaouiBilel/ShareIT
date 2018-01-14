'use strict';

angular.module('myApp.profile', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/profile', {
            templateUrl: 'pages/profile/profile.html',
            controller: 'profileCtrl'
        });
    }])

    .controller('profileCtrl', ['$scope','$http',function($scope,$http) {
        $scope.data ={};
        $scope.id = localStorage.getItem('uid');
        $http({
            method: 'GET',
            url: 'http://localhost/finalats/web/app_dev.php/membres/'+ $scope.id
        }).then(function success(response) {
            $scope.data = JSON.parse(JSON.stringify(response.data))

        });
    }]);