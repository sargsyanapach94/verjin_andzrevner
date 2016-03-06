(function (angular) {
  "use strict";
  angular.module('test.profileCtrl', ['ui.router'])
  .controller('profileCtrl', function ($scope, $rootScope, $location, googleService) {
    /*get profile data*/
    googleService.getData($rootScope.auth)
      .then(function(data){
      	console.log(data);
        $scope.profile = data;
      });

  	$scope.logout = function (){
      googleService.logout();
	    $location.path('/main');
        
      } ; 

  })
  .config(function ($stateProvider) {
    $stateProvider
      .state('profile', {
        url: '/test/profile',
        templateUrl: 'profile/profile.html',
        controller: 'profileCtrl'
      });
  });
}(angular));
