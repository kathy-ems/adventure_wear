var chai = require('chai');
var expect = chai.expect;

var csvParse = require('../../lib/utils/chrome_csv_converter.js');
var fs = require('fs');
var sinon = require('sinon');

describe('CSV Converter', function() {
  afterEach(function() {
    if (fs.readFile.restore) {
      fs.readFile.restore();
    };
  });
  it('should load the CSV file', function() {
    var filePath = './file/that/exists'
    var spy = sinon.spy(fs, 'readFile');
    // fs.readFile
    // fs.readFile.calledOnce = true;
    csvParse(filePath);
    expect(fs.readFile.calledOnce).to.equal(true);
    expect(fs.readFile.getCall(0).args[0]).to.equal(filePath);
  });
  it('should throw an error if the file does not exist', function(done) {
    csvParse('file/that/does/not/exist.csv', function(err) {
      expect(err).to.exist;
      expect(err.code).to.equal('ENOENT');
      done();
    });
  });
  it('should not throw an error if the file exists', function(done) {
    csvParse('./data/test.csv', function(err, data) {
      expect(err).to.not.exist;
      expect(data).to.exist;
      done();
    });
  });
  describe("from an existing CSV", function() {
    var err, data;
    var product = 'rhuFab V2 1K';
    var recipe = 'AMD_1K_HP_CHROM_OP';
    var phase = 'Pre-equil wash condo (mmho)';
    beforeEach(function(next) {
      csvParse('./data/test.csv', function(_err, _data) {
        err = _err;
        data = _data;
        next();
      });

    });
    it('should call the csv parse if the file exists', function() {
      expect(data).to.exist;
      expect(data).to.be.an('object');
    });
    it('should have the drug be the main key', function() {
      expect(data).to.include.keys('NUTROPIN');
    });
    it('should have multiple drugs', function(){
      expect(Object.keys(data)).to.have.length(2);
    });
    it('should have 2 product recipes', function(){
      expect(Object.keys(data[product])).to.have.length(2);
    });
    it('should have phase information', function(){
      expect(data[product][recipe]).to.exist;
    });
    it('should have phases', function(){
      expect(data[product][recipe]).to.be.an('object');
      expect(Object.keys(data[product][recipe])).to.have.length(2);
    });
    it('should have a phase description with the phase data', function() {
      expect(Object.keys(data[product][recipe][phase])).to.have.length(8);
    });

  });

  it('should convert a product configuration into an indexed object', function(done){
    csvParse('./data/test_single.csv', function(err, data) {
      var expectedObject = {
        'NUTROPIN' : {
          'S100 Regeneration Procedure' : {
            'Col 1 regen condo (mmho)' : {
              'phase_tag_table' : 'history',
              'phase_tag' : '1013_ACTPHASE',
              'phase_tag_value' : '4',
              'other_tag' : 'SQM1013_STATE',
              'other_tag_value' : '256',
              'flow_tag' : 'FQS1013_01',
              'sampling_rate' : '90',
              'data_tag' : 'AIT1015_01'
            }
          }
        }
      };

      expect(data).to.eql(expectedObject);
      done();
    });


  });
  
});

/*
  data = {
    "NEUTROPIN": {
      "S100 Regeneration Procedure": {},
      "S100 Main Procedure (Liquid)": {},
      "AEC Main Procedure": {
         "Pre-equil condo (mmho)": {
            "phase_tag_table": "history" ,
            "phase_tag": "1000_ACTPHASE",
            "phase_tag_value": 10  ,
            "other_tag": "SQM1000_STATE",
            "other_tag_value": 256 ,
            "flow_tag": "FQS1000_01",
            "sampling_rate": 60  ,
            "data_tag": "IT1000_02",
         }
         "Pre-equil pH": {}
         "Equil condo (mmho)": {}
         "Equil pH": {}
         "Load OD #1 (AU)": {}
         "Load OD #2 (AU)": {}
         "Load condo (mmho)": {}
         "Wash 4 OD #1 (AU)": {}
         "Wash 4 OD #2 (AU)": {}
         "Elution pH": {}
         "Elution OD #1 (AU)": {}
         "Elution OD #2 (AU)": {

         }
      }
    }
  }

*/