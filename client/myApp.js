var myApp = angular.module('myApp',['ngRoute']);

/**
 * Configuration du module principal : myApp
 */
myApp.config(['$routeProvider','$locationProvider',
    function($routeProvider, $locationProvider) { 
        
        // Système de routage
        $routeProvider
        .when('/liste', {
            templateUrl: 'client/views/liste.html',
            controller: 'listeCtrl'
            
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