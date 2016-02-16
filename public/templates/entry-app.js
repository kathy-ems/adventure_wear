var app = angular.module('adventurewear', [
  'ngRoute',
  'adventurewear.main'
  // 'adventurewear.footer',
  // 'adventurewear.wardrobedata'
]);

  app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'index.html',
      controller: 'mainController'
    })
    // .when('/main', {
    //   templateUrl: 'main.tpl.html',
    //   controller: 'mainController'
    // })
    // .when('/list', {
    //   templateUrl: 'wardrobe.tpl.html',
    //   controller: 'wardrobeController'
    // })
    // .when('/footer', {
    //   templateUrl: 'footer.tpl.html',
    //   controller: 'footerController'
    // })
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
