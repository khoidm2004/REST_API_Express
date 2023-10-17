const chai = require("chai");
const expect = chai.expect;
const hexToRGB = require("../index").hexToRGB;

describe("Hex to RGB Conversion",()=>{
    it("Should convert hex color to RGB",()=>{
        const hex = "#FF5733";
        const result = hexToRGB(hex);
        expect(result).to.deep.equal({r:255,g:87,b:51});
    });

    it("Should handle short hex strings",()=>{
        const hex = "#F75";
        const result = hexToRGB(hex);
        expect(result).to.deep.equal({r:255, g:119, b:85});
    });
});