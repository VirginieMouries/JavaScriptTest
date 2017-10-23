/*
myApp.factory('listeFactory', ['$resource',
function($resource) {
	console.log("listeFactory");
	myUserPhotons.getUsers = function(){
				
		return UserPhoton.find();				
	};
	


	}
]);

*/

myApp.factory('listeFactory', ['$resource',
	function($resource) {
		console.log("listeFactory ressource");
		return $resource('/liste/:userId', { userId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);

