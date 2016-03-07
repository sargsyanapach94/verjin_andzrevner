angular.module('test.noteCtrl', ['ui.router'])

.config(function ($stateProvider) {

  $stateProvider
    .state('notes', {
      url: '/notes',
      templateUrl: 'note/note.tpl.html',
      controller: 'NoteController'
    });
})
.controller('NoteController', function ($scope) {
	console.log('notes');
  $scope.message = 'Yooo!';
});
