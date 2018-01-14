'use strict';

angular.module('myApp.login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'pages/login/login.html',
    controller: 'loginCtrl'
  });
}])

.controller('loginCtrl', ['$scope','$location','$http',function($scope,$location,$http) {
  $scope.test = false;
  $scope.resp = {};
  $scope.logIn = function (user) {
      $scope.data = {'email': user.email, 'password': user.password};
      $http.post('http://localhost/finalats/web/app_dev.php/connexion', $scope.data).then(
          function success(response) {
            $scope.resp = JSON.parse(JSON.stringify(response.data));
            if(JSON.parse(JSON.stringify(response.data)) != -1 ) {
              localStorage.setItem('uid', JSON.parse(JSON.stringify(response.data)));
              $location.path('/')
            } else {
              alert('Email or Password incorrect!')
            }
          }
      )
}
}]);
