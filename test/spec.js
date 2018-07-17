const expect = require('chai').expect;
const convertToF = require('../tempCalc.js');
const convertToC= require('../tempCalc.js');

describe('has a convert F function', ()=>{
  it('exist',()=>{
    expect(convertToF).to.be.ok;
  });
  it('can convert base case at 0',()=>{
    expect(convertToF(0)).to.be.equal(86);
  });
  xit('can conver more other nums', ()=>{
    expect(convertToF(40)).to.be.equal(4.44);
  });
});

describe('has a convert C function', ()=>{
  it('exist', ()=>{
    expect(convertToC).to.be.ok;
  });
  it('can handle the base case 0', ()=>{
    expect(convertToC(0)).to.be.equal(32);
  });
  it('-10', ()=>{
    expect(convertToC(-10)).to.be.equal(14)
  });
});
