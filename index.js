var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var UserPhoton = require('./models/userphoton.js');
var app = express();

// j'instance la connection mongo 
var promise = mongoose.connect('mongodb://localhost:27017/ifa', {
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
app.set('views', './views');


// je déclare mes fichiers statiques
app.use('/js', express.static('./client/js'));
app.use('/css', express.static('./client/css'));

// pour communiquer avec le serveur que nous avons déclaré en angularjs
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

// je renvoie l'index.html
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/client/index.html')
});
app.get('/profil', function(req, res) {
    res.sendFile(__dirname + '/client/profil.html')
});



// API : 
// renvoyer toute la liste des eleves
app.get('/api/liste', function(req, res) {
    Eleve.find({}, function(err, collection) {
        if (err) {
            console.log(err);
            return res.send(500);
        } else {
            return res.send(collection);
        }
    });

});

// renvoie un seul eleve avec son id en param 
app.get('/api/liste/:id', function(req, res) {
    console.log(req.params);
    console.log(req.params.id);
    Eleve.findOne({
        "_id": req.params.id
    }, function(err, monobject) {
        if (err) {
            console.log(err);
            return res.send(err);
        } else {
            
            res.send(monobject);
        }
    });
});

// gère les requetes post
app.post('/quotes', function(req, res) {
    console.log(req.body);
    console.log("my name is " + req.body.nom);
    var newUser = {
        nom: req.body.nom,
        prenom: req.body.prenom
    };
    liste.push(newUser);
    // liste.push(t);
    res.send(200);

});

// exemple de rendu html / jade
app.get('/api/liste/jade/:id', function(req, res) {
    console.log(req.params);
    console.log(req.params.id);
    Eleve.findOne({
        "_id": req.params.id}, 
        function(err, monobject) {
            if (err) {
                console.log(err);
                return res.send(err);
            } else {
                return res.render('profil', {
                    title: 'Hey',
                    nom: monobject.nom,
                    prenom: monobject.prenom
            });
        }
    });
}); 

// ajouter un elève
app.post('/api/new', function(req, res) {
    console.log("données recues");
    // console.log(req.query.nom);
    console.log(req.body);


    var newUser = new Eleve(req.body);
    console.log(newUser);    
 
    // On le sauvegarde dans MongoDB !
    newUser.save(function (err) {
    if (err) { throw err; }
        console.log('Elève ajouté avec succès !');
        // On se déconnecte de MongoDB maintenant
        // mongoose.connection.close();        
        res.type('json').status(200).send(newUser); 
    });

    // res.send(200);

});

// supprimer un elève
app.post('/api/delete', function(req, res) {
    console.log("données recues");
    
    console.log(req.body);  
    var idDelete = req.body._id;
    console.log(idDelete);
    console.log(typeof idDelete)
 
    // On le supprime dans MongoDB !
    //Eleve.findByIdAndRemove(idDelete);
    //Eleve.findByIdAndRemove({"_id": idDelete},function(err,obj){
    Eleve.findByIdAndRemove(idDelete,function(err,obj){
        if(err){
            console.log(err);
            return res.status(500).send();
        }else{
            return res.status(200).send();
        }

          
    }); // findByIdAndRemove
});

// éditerer un elève pour le modifier
app.put('/api/edit/:id', function(req, res) {
    console.log(req.params);
    console.log(req.body);
    console.log(req.params.id);
    Eleve.findByIdAndUpdate(req.params.id,req.body, { new: true }, function (err, updatedEleve) {
      if (err) return handleError(err);
      console.log(updatedEleve);
      res.status(200).send(updatedEleve);
    });
});    

