# JavaTest
Test JS réalisé le 23/10/2017 pour l'évalutaion du module

Technologies utilisées:
- nodejs
- angularjs
- mongodb

nodejs: 
	-	necessite l'installation des paquets ( express, mongoose, body-parser ) qui sont déclarées dans package.json . Depuis gitBash ou cmd:
		npm install

	-	lancement de l'application depuis gitBash ou cmd:
	nodemon index.js

angularjs:
	- déclaré en CDN dans le fichier index.html. Rien à faire

mongodb:
	- nécessite d'avoir installé mongoDB 
	- lancer le serveur depuis une cmd :
	Pour moi: "C:\Program Files\MongoDB\Server\3.4\bin\mongod.exe" --dbpath C:\Users\ELEVE\Documents\Virginie\MongoDB\Data\db
	- mon nom de base de données : test23
	- une collection à ce jour: userphotons

Tout ceci est expliqué dans les fiches https://github.com/lleoooell/ifafiches

Etat du projet:
- routage effectué
- création de 3 "pages" accessibles depuis le menu: Liste utilisateurs, Boitier, Detail 
- création de 3 controlleurs ( vides pour le moment sauf pour liste)
- création d'un service listeService pour récupèrer les données de la base

--> la collection renvoyée est vide ( alors qu'il y a une données dans la base )


