var mongoose = require('../config/db');

var wearSchema = new mongoose.Schema({
  active: {
    type: Boolean,
    required: true
  },
  activity: {
    type: String,
    required: true
  },
  addedOn: {
    type: Date,
    required: true
  },
  arms: {
    type: String,
    required: true
  },
  bottom: {
    type: String,
    required: true
  },
  conditions: {
    type: String,
    required: true
  },
  dateTime: {
    type: Date,
    required: true
  },
  feelsLike: {
    type: Number
  },
  hands: {
    type: String,
    required: true
  },
  head: {
    type: String,
    required: true
  },
  intensity: {
    type: String,
    required: true
  },
  neck: {
    type: String,
    required: true
  },
  notes: {
    type: String,
    required: true
  },
  humidity: {
    type: Number,
    required: true
  },
  outter: {
    type: String,
    required: true
  },
  percip: {
    type: String,
    required: true
  },
  percipType: {
    type: String,
    required: true
  },
  rate: {
    type: String,
    required: true
  },
  reflective: {
    type: String,
    required: true
  },
  socks: {
    type: String,
    required: true
  },
  temperature: {
    type: Number,
    required: true
  },
  timeOfDay: {
    type: String,
    required: true
  },
  top: {
    type: String,
    required: true
  },
  wind: {
    type: Number,
    required: true
  }
});

wearSchema.index({ weather.temperature: 1, dateTime: 1 });
wearSchema.index({ weather.temperature: 1, activity: 1, timeOfDay: 1 });
module.exports = mongoose.model('Wear', wearSchema);
