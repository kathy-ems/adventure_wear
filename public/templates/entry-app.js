var routes    = require('./routes/routes.js');
var wardrobeData       = require('../services/wardrobeData.js');
var MainController     = require('../controllers/mainController.js');
var Footer             = require('../directives/footer.js');

angular.module('adventurewear', ['ngResource', 'ngRoute', 'ngAnimate']);

  .config('$routeProvider', '$locationProvider')
  .when('/', {
      templateUrl: '../public/templates/index.html',
      controller: 'mainController'
    })
    .when('/wardrobe', {
      templateUrl: '../public/templates/wardrobe.tpl.html',
      controller: 'wardrobeController'
    })
    .otherwise({
      redirectTo:'/'
    });
  $locationProvider.html5Mode(true);
}


.factory('wardrobeData',['$http', wardrobeData]);

.directive('Footer', Footer);

.controller('MainController', ['$scope', MainController]);
