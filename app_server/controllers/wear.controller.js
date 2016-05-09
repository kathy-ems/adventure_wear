var Wear = require('../models/wear.model');
var Promise = require('bluebird');

// gets all data for one event (restaurant)
exports.getWardrobe = function getWardrobe() {
  return Wear.find();
};
