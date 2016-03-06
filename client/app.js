(function (angular) {
  'use strict';
  angular.module('test', [
    'ui.router',
    'ngResource',

    'test.noteCtrl',
    'test.loginCtrl',
    'test.profileCtrl'
    ])
  .controller('testCtrl', function($scope, $rootScope, services) {
    $scope.test= 'new twese';

   // services.query()
   //   .$promise.then(function(data){
   //      console.log(data);        
   //    });

    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
      // console.log(arguments)
      });

  })

  .config(function ($urlRouterProvider, $stateProvider ) {
    
    $urlRouterProvider.otherwise('/test/login');

  });
}(angular));



