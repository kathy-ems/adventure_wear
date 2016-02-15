// var routes    = require('./routes/routes.js');

app.use(function(req, res) {
  res.sendfile(path.join(__dirname, 'public', 'templates', 'main.tpl.html'));
});

(function () {

    angular.module('express-node-simple', ['ngAnimate', 'ngRoute'])

    function config ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: '../public/templates/main.tpl.html',
          controller: 'mainController'
        })
        .otherwise({
          redirectTo: '/'
        });

    angular
      .module('express-node-simple')
      .config(['$routeProvider', config]);

  })();

  var wardrobeData = function ($http) {
    // var locationByCoords = function (lat, lng) {
    //   return $http.get('/api/locations?lng=' + lng + '&lat=' + lat + '&maxDistance=20');
    // };
    return [{
          name: 'VBScript',
          birthYr: 1996,
          webInterface: 3,
        },
        {
          name: 'JavaScript',
          birthYr: 1995,
          webInterface: 3
        },
        {
          name: 'Ruby',
          birthYr: 1995,
          webInterface: 2
        },
        {
          name: 'PHP',
          birthYr: 1995,
          webInterface: 2
        },
        {
          name: 'JAVA',
          birthYr: 1995,
          webInterface: 2
        },
        {
          name: 'Perl',
          birthYr: 1987,
          webInterface: 2
        },
        {
          name: 'ActionScript',
          birthYr: 1998,
          webInterface: 1
        },
        {
          name: 'Typescript',
          birthYr: 2012,
          webInterface: 1
        },
        {
          name: 'Python',
          birthYr: 1991,
          webInterface: 1
    }];
   };
