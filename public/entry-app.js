// var routes    = require('./routes/routes.js');
//
// (function () {

    angular.module('express-node-simple', ['ngAnimate'])

    function config ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: '../public/templates/main.tpl.html',
          controller: 'mainController'
        })
        .otherwise({
          redirectTo:'/'
        });

    angular
      .module('loc8rApp')
      .config(['$routeProvider', config]);

  // })();
