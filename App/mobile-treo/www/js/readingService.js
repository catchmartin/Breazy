 // public/js/services/readingService.js
angular.module('readingService', [])

	.factory('Reading', function($http) {

		return {
			// get all the readings
			get : function() {
				delete $http.defaults.headers.common['X-Requested-With'];
				return $http.get('http://dev.thebedroomlaboratory.com/~martin/brewmonitor/api/readings');
			}//,

			// // save a reading (pass in reading data)
			// save : function(readingData) {
			// 	return $http({
			// 		method: 'POST',
			// 		url: 'http://dev.thebedroomlaboratory.com/~martin/brewmonitor/api/readings',
			// 		headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
			// 		data: $.param(readingData)
			// 	});
			// },

			// // destroy a reading
			// destroy : function(id) {
			// 	return $http.delete('http://dev.thebedroomlaboratory.com/~martin/brewmonitor/api/readings/' + id);
			// }
		}

	});
	
