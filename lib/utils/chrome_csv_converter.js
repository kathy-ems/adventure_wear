var fs    = require('fs');
var parse = require('csv-parse');
var path  = '';

var csvParse = module.exports = function(filePath, callback) {
  fs.readFile(filePath, function(err, data) {
    if(err) {
      callback(err, data);
      return;
    }
    parse(data, {}, function(err, rows) {
      var headers = rows[0];
      var products = rows.slice(1);
      var result = {};
      products.forEach(function(phaseConfiguration) {
        var drugName   = phaseConfiguration[1];
        var recipeName = phaseConfiguration[4];
        var phaseName  = phaseConfiguration[5];
        if(result[drugName] === undefined){
          result[drugName] = {};
        }        
        if(result[drugName][recipeName] === undefined){
          result[drugName][recipeName] = {};
        }

        result[drugName][recipeName][phaseName] = {};

        for (var i = 6; i <= 13; i++) {
          result[drugName][recipeName][phaseName][headers[i]] = phaseConfiguration[i];
        }
        
      });
      return callback(err, result);
    });
  });
};


/*
  chromeParse(path, function(err, result) {
    // result is a JSON object
  });
*/