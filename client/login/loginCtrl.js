(function (angular) {
  "use strict";
  angular.module('test.loginCtrl', ['ui.router'])

  .controller('loginCtrl', function ($scope, $rootScope, $location, googleService) {
     $scope.login = function (){

        googleService.login()
          .then(function(auth){
          	 $rootScope.auth = auth;
          	 $location.path('/test/profile');
          });
      };
  })

  .config(function ($stateProvider) {

    $stateProvider
      .state('login', {
        url: '/test/login',
        templateUrl: 'login/login.html',
        controller: 'loginCtrl'
      });
  });
}(angular));


