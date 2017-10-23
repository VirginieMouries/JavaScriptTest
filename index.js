var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var UserPhoton = require('./models/userphoton.js');
var app = express();

// j'instance la connection mongo 
var promise = mongoose.connect('mongodb://localhost:27017/test23', {
    useMongoClient: true,
});
// quand la connection est réussie
promise.then(function(db) {

    console.log('db.connected');
    // je démarre mon serveur node sur le port 3000
    app.listen(3000, function() {
        console.log('listening on 3000 and database is connected');
    });

});

// express configs
// j'utilise bodyparser dans toutes mes routes pour parser les res.body en json
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

// je déclare mon dossier qui contient mes vues
app.set('views', './client/views');

// je déclare mes fichiers statiques
app.use('/client', express.static('./client'));


// je renvoie l'index.html
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html')
});


// API : 
// renvoyer toute la liste des eleves
app.get('/liste', function(req, res) {
    console.log("liste");
    UserPhoton.find({}, function(err, collection) {
        if (err) {
            console.log(err);
            return res.send(500);
        } else {
            console.log("j'ai envoyé la collection");           
            return res.send(collection);
        }
    });

});


