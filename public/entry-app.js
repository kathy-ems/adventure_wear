var main = require('../public/templates/main.tpl.html');

(function () {

    angular.module('adventure-wear', ['ngAnimate', 'ngRoute']);

    function config ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: '../public/templates/main.tpl.html',
          controller: 'mainController',
          controllerAs: 'vm'
        })
        .otherwise({ redirectTo: '/' });
        // use the HTML5 History API
        $locationProvider.html5Mode(true);
      }

    angular
      .module('adventure-wear')
      .config(['$routeProvider', config]);

  })();
