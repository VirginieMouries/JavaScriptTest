
myApp.factory('listeFactory', ['$resource',
function($resource) {
	
	myUserPhotons.getUsers = function(){
		console.log("Service");		
		return UserPhoton.find();				
	};
	


	}
]);

/*

myApp.factory('listeFactory', ['$resource',
	function($resource) {
		return $resource('/liste/:userId', { userId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);

*/