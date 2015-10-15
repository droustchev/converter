var expect = require("chai").expect;
var converter = require("../app/converter");

describe("Color Code Converter", function() {
  describe("RGB to Hex conversion", function() {
    it("converts the basic colors", function() {
      var redHex = converter.rgbToHex(255, 0, 0);
      var greenHex = converter.rgbToHex(0, 255, 0);
      var blueHex = converter.rgbToHex(0, 0, 255);

      expect(redHex).to.equal("ff0000");
      expect(greenHex).to.equal("00ff00");
      expect(blueHex).to.equal("0000ff");
    });
  });

  describe("Hex to RGB conversion", function() {
    it("converts the basic colors", function() {
      var redHex = converter.hexToRgb("ff0000");
      var greenHex = converter.hexToRgb("00ff00");
      var blueHex = converter.hexToRgb("0000ff");

      expect(redHex).to.deep.equal([255, 0, 0]);
      expect(greenHex).to.deep.equal([0, 255, 0]);
      expect(blueHex).to.deep.equal([0, 0, 255]);
    });
  });
});
