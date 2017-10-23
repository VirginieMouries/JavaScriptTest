var myApp = angular.module('myApp',['ngRoute','ngResource']);

/**
 * Configuration du module principal : myApp
 */
myApp.config(['$routeProvider','$locationProvider',
    function($routeProvider, $locationProvider) { 
        
        // Système de routage
        $routeProvider
        .when('/liste', {
            templateUrl: 'client/views/liste.html',
            controller: 'listeCtrl',
            resolve:{
                liste:function(listeFactory){
                    console.log('myApp, resolve, liste');
                    return listeFactory.query();
                }
            }
        })
        .when('/boitier', {
            templateUrl: 'client/views/boitier.html',
            controller: 'boitierCtrl'
        })
        .when('/detail', {
            templateUrl: 'client/views/detail.html',
            controller: 'detailCtrl'
        })
        .otherwise({
            redirectTo: 'index.html'
        })
        ;
    }
]);