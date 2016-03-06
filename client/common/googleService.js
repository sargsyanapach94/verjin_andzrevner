(function (angular) {
  "use strict";

  angular.module('test')
  .factory('googleService', function ($http, $q) {
  	hello.init({ google: '145524553142-ko9cdemk19l1025hlk1vif3vqa4a099s.apps.googleusercontent.com'});

    return {
    	login: function (argument) {
    		var def = $q.defer();

  			hello('google').login().then(function(data) {
				console.log('Signed in');
				def.resolve(data);
			}, function(e) {
				console.log('Signed in error: ' + e.error.message);
			});

	        return def.promise;
    	},
    	logout: function (argument) {
        
    		hello('google').logout()
    			.then(function() {
					console.log('Signed out');
				}, function(e) {
					console.log('Signed out error: ' + e.error.message);
				});

    	},
    	getData: function (auth) {
    		var def = $q.defer();
    		hello.api(auth.network+':/me', function(data){
		          	def.resolve(data);
		        });
    		return def.promise;
    	} 

    };
  });
}(angular));
