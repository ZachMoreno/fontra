'use strict';

angular.module('fontra.gallery', [])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

		$stateProvider.state('gallery', {
			url: '/gallery',
			templateUrl: 'views/gallery/gallery.html',
			controller: 'galleryController'
		});

		$urlRouterProvider.otherwise('/gallery');
}])


.factory('GoogleWebFontsAPI', ['$resource', function($resource) {
  var remoteURL = 'https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyAJPTfXDpEtRhd3Fcvk4peRX_6YEJlJLSY',

    googleWebFontsAPI   = $resource(remoteURL,
	                            {},
	                            {
	                              getAllTypefaces: {
	                                method: 'GET',
	                                isArray: false,
	                                cache: true
	                              }
	                            }
	                           );

  return googleWebFontsAPI;
}])


.controller('galleryController', ['$scope', 'GoogleWebFontsAPI', function($scope, GoogleWebFontsAPI) {
	GoogleWebFontsAPI.getAllTypefaces().$promise.then(function(promisedTypefaces) {
		$scope.typefaces = promisedTypefaces.items;

		console.log($scope.typefaces);
	});

	$scope.showSearch = false;

	$scope.toggleSearch = function toggleSearch() {
		!$scope.showSearch;
		console.log($scope.showSearch);
	}
}]);