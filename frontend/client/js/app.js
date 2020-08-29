angular.module('MvTeste', ['ngAnimate', 'ngRoute', 'ngResource'])
    .config(function($routeProvider, $locationProvider) {

        $routeProvider.when('/index', {
            templateUrl: 'pages/index.html',
            controller: 'IndexController'
        });

        $routeProvider.when('/contato/novo', {
            templateUrl: 'pages/contato.html',
            controller: 'ContatoController'
        });

        $routeProvider.when('/contato/:contatoId', {
            templateUrl: 'pages/contato.html',
            controller: 'ContatoController'
        });

        $routeProvider.otherwise({ redirectTo: '/index' });

    });