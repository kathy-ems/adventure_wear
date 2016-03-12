var express = require('express');
var db = require('./db');
var path = require('path');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');

// Middleware
var logger = require('morgan');
var parser = require('body-parser');


// Routes
var routes = require('./routes/index');
var users = require('./routes/users');

// API Routes
var routesApi = require('./app_api/routes/index');

var app = express();

// Set what we are listening on.
app.set('port', 8460);

// // view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// app.engine('.html', require('ejs').renderFile);

// Logging and parsing
app.use(logger('dev'));
app.use(parser.json());
app.use(parser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// console.log('DIRNAME:', __dirname, 'JOINED:', path.join(__dirname, '../../bower_components'));

// app.use('/bower_components',  express.static(__dirname + 'public/bower_components'));
// app.use(express.static(path.join(__dirname, 'public', 'templates')));

// Set up our routes
app.use('/', routes);
app.use('/api/', routesApi);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// Serve the client files
// app.use(express.static(__dirname + '/../client'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

// If we are being run directly, run the server.
if (!module.parent) {
  app.listen(app.get('port'));
  console.log('Listening on', app.get('port'));
}
console.log('Listening on port ', app.get('port'));

module.exports = app;
