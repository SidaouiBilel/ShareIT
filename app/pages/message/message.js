'use strict';

angular.module('myApp.message', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/message', {
            templateUrl: 'pages/message/message.html',
            controller: 'messageCtrl'
        });
    }])

    .controller('messageCtrl', ['$scope','$http', function($scope,$http) {
        $scope.categorie = false;
        $scope.data = {};
        $http({
            method: 'GET',
            url: 'http://localhost/finalats/web/app_dev.php/membres/1'
        }).then(function success(response) {
            $scope.data = JSON.parse(JSON.stringify(response.data))

        });
    }]);