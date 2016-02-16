var app = angular.module('adventurewear', [
  'ngRoute',
  'adventurewear.main',
  'adventurewear.footer',
  'adventurewear.wardrobedata'
]);

  app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'main.tpl.html',
      controller: 'mainController'
    })
    .otherwise({
      redirectTo: '/'
    })
  });

//
// app.factory('wardrobeData',['$http', wardrobeData]);
//
// app.directive('Footer', Footer);
//
// app.controller('MainController', ['$scope', MainController]);
