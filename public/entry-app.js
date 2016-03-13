var app = angular.module('adventurewear', [
  'ngRoute',
  'adventurewear.main',
  'adventurewear.filters'
]);

  app.config(['$routeProvider',
    function($routeProvider) {
      $routeProvider
      .when('/main', {
        templateUrl: 'main/main.tpl.html',
        controller: 'mainController'
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
