(function (angular) {
  "use strict";

  angular.module('test')
  .factory('services', function ( $resource) {

    return $resource('http://localhost:9000/users');
  });
}(angular));
