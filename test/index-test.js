var assert = require('assert');
var helper = require("../helper");

describe('Helper Test', function() {
  describe('getNames()', function() {
    it('First array name should be Tony', function() {
        var nameArray = helper.getNames();
        
        var expactedArray = "Tony"
        assert.equal(nameArray[0], expactedArray);
    });
  });
});