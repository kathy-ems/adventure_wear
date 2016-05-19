module.exports = function($routeProvider, $locationProvider){
  $routeProvider
    .when('/', {
      templateUrl: '../public/templates/main.tpl.html',
      controller: 'mainController'
    })
    // .when('/wardrobe', {
    //   templateUrl: '../public/templates/wardrobe.tpl.html',
    //   controller: 'wardrobeController'
    // })
    .otherwise({
      redirectTo: '/'
    });
  $locationProvider.html5Mode(true);
};
