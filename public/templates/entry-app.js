var app = angular.module('adventurewear', [
  'ngRoute',
  'adventurewear.main'
  // 'adventurewear.footer',
  // 'adventurewear.wardrobedata'
]);

  app.config(['$routeProvider',
    function($routeProvider) {
      $routeProvider
      // .when('/', {
      //   templateUrl: 'index.html'
      // })
      .when('/main', {
        templateUrl: 'templates/main.tpl.html',
        controller: 'mainController'
      })
      // .when('/list', {
      //   templateUrl: 'wardrobe.tpl.html',
      //   controller: 'wardrobeController'
      // })
      // .when('/footer', {
      //   templateUrl: 'footer.tpl.html',
      //   controller: 'footerController'
      // })
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
