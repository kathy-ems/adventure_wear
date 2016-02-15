module.exports = function($routeProvider, $locationProvider){
  $routeProvider
    .when('/', {
      templateUrl: '../public/templates/main.tpl.html',
      controller: 'mainController'
    })
    .otherwise({
      redirectTo:'/'
    });
  $locationProvider.html5Mode(true);
};
