var models = require('../models');

module.exports = {
  languages: {
    // a function which handles retrieving of all languages from the database
    get: function (req, res) {
      models.languages.get(function (data){
        res.send(data); // send the response to the user
      });
    },
    // a function which handles posting a language to the database
    post: function (req, res) {
      models.languages.post(req.body['language'],
        req.body['birthYear'],
        req.body['interface'],
        function (string){
          res.send('Sends a language to API/user that it worked!'); // send the response to the user
        });
    }
  },
  users: {
    get: function (req, res) {},
    post: function (req, res) {}
  }
};
