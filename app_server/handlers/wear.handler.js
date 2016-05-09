var WearController = require('../controllers/wear.controller');
var Promise = require('bluebird');

exports.getWardrobe = function getWardrobe(req, res) {

  WearController.getWardrobe()
  .then(function thenFoundEvents(foundEvents) {
    if (!foundEvents) {
      throw new Error('event not found');
    } else {
      res.status(201).json(foundEvents);
    }
  })
  .catch(function catchError(error) {
    res.status(404).json(error.message);
  });
};
