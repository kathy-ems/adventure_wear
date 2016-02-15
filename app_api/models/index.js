var db = require('../../db');

module.exports = {
  languages: {
    // a function which produces all the languages
    get: function (responseToController) {
      var queryString = 'SELECT l.language, l.birthYear, w.interface FROM languages l INNER JOIN webInterfaces w on l.webInterfaceId = w.interfaceId';
      db.dbConnection.query(queryString, function(err, data) {
        if (err) { throw err; }
        responseToController(data);
      });
    },
    // a function which posts a new language to the database
    post: function (language, birthYear, interface, responseToController) {
      var interfaceIdQuery = 'SELECT interfaceId FROM webInterfaces WHERE interface = "' + interface + '" ';
      db.dbConnection.query(interfaceIdQuery, function(err, data) {
        if (err) { throw err; }
        var queryString = 'INSERT INTO languages (language, interfaceId) VALUES ("' + language + '", ' + data[0].interfaceId + ')';
        db.dbConnection.query(queryString, function(err) {
          if (err) { throw err; }
          responseToController('added language!');
        });
      });
    }
  },
  // example of second method for adding interfaces
  webInterfaces: {
    get: function () {},
    post: function () {}
  }
};
