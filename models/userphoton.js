var mongoose = require('mongoose');

var userphotonSchema = mongoose.Schema({
    "nom": String, 
    "prenom": String, 
    "photonId": String, 
});
// je crée un model et j'attache le schema ci dessus
var Userphoton = mongoose.model('Userphotons', userphotonSchema);

module.exports = Userphoton;