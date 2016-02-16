var app = angular.module('adventurewear', [
  'ngRoute',
  'adventurewear.main',
  'adventurewear.wardrobedata'
]);

  app.config(['$routeProvider',
    function($routeProvider) {
      $routeProvider
      .when('/main', {
        templateUrl: 'templates/main.tpl.html',
        controller: 'mainController'
      })
      .when('/list', {
        templateUrl: 'templates/wardrobe.tpl.html',
        controller: 'wardrobeController'
      })
      .otherwise({
        redirectTo: '/main'
      })
  }]);

//
// app.factory('wardrobeData',['$http', wardrobeData]);
//
// app.directive('Footer', Footer);
//
// app.controller('MainController', ['$scope', MainController]);
