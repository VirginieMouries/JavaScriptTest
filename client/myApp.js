var myApp = angular.module('myApp',['ngRoute']);

/**
 * Configuration du module principal : myApp
 */
myApp.config(['$routeProvider',
    function($routeProvider) { 
        
        // Système de routage
        $routeProvider
        .when('/liste', {
            templateUrl: 'views/liste.html',
            controller: 'listeCtrl'
        })
        .when('/boitier', {
            templateUrl: 'views/boitier.html',
            controller: 'boitierCtrl'
        })
        .when('/boitier', {
            templateUrl: 'views/detail.html',
            controller: 'detailCtrl'
        })
        .otherwise({
            redirectTo: './index.html'
        })
        ;
    }
]);