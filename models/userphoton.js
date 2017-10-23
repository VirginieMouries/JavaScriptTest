var mongoose = require('mongoose');

var userPhotonSchema = mongoose.Schema({
    "nom": String, 
    "prenom": String, 
    "photonId": String, 
});
// je crée un model et j'attache le schema ci dessus
var UserPhoton = mongoose.model('UserPhotons', userPhotonSchema);

module.exports = UserPhoton;