var routes    = require('./routes/routes.js');

var app = angular.module('adventure-wear', ['ngResource', 'ngRoute', 'ngAnimate']);

app.config(['$routeProvider', '$locationProvider', routes]);

var wardrobeData       = require('./services/wardrobeData.js');
var MainController     = require('./controllers/mainController.js');
var Footer             = require("./directives/footer.js");

app.factory('wardrobeData',['$http', wardrobeData]);

app.directive('Footer', Footer);

app.controller('MainController', ['$scope', MainController]);
