// var routes    = require('./routes/routes.js');

app.use(function(req, res) {
  res.sendfile(path.join(__dirname, 'public', 'templates', 'main.tpl.html'));
});
//
// (function () {

    angular.module('express-node-simple', ['ngAnimate'])

    function config ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: '../public/templates/main.tpl.html',
          controller: 'mainController'
        })
        .otherwise({
          redirectTo:'/'
        });

    angular
      .module('loc8rApp')
      .config(['$routeProvider', config]);

  // })();
