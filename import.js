/* 
	import.js

	Import de quelques données sous forme de DataBase de type MondoDB

*/

// j'importe ma lib mongoose
var mongoose = require('mongoose');

// je crée mon schema
var userPhotonSchema = mongoose.Schema({
    "nom": String, 
    "prenom": String, 
    "photonId": String, 
});

// je crée un model et j'attache le schema ci dessus
var UserPhoton = mongoose.model('UserPhotons', userPhotonSchema);

// je me connecte a la db
var promise = mongoose.connect('mongodb://localhost:27017/test23', {
  useMongoClient: true,
});
// quand la connection est réussie
promise.then(function(db) {

	console.log('db.connected');
	console.log(db);
	

	// je crée un nouvel eleve
	var test = new UserPhoton({
		"nom" : 'Mouriès',
		"prenom": "Virginie",
		"photonId":"aucun"

	});
	
	// je le save en db
	test.save(function(err, eleve){
		if(err){
			return console.log(err);
		}
		else{
			console.log("eleve success");
			console.log(eleve);
		}
	}) 
	
});
