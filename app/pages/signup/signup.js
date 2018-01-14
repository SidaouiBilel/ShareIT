'use strict';

angular.module('myApp.signup', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/signup', {
    templateUrl: 'pages/signup/signup.html',
    controller: 'signupCtrl'
  });
}])

.controller('signupCtrl', ['$scope','$http','$location',function($scope,$http,$location) {
  $scope.data = {};
  $scope.sign_up = function (user) {
      $scope.data = {'prenom': user.prenom, 'nom': user.nom, 'email': user.email, 'tel': user.tel, 'ville': user.ville, 'password': user.password, 'adr_postale': user.adr_postale};
      $http.post('http://localhost/finalats/web/app_dev.php/membres', $scope.data).then(function success(response) {
        $scope.data = JSON.parse(JSON.stringify(response.data));
        localStorage.setItem('uid', $scope.data.id);
        $location.path('/');
      })
  }
}]);