//noinspection JSUnresolvedVariable
import { expect } from 'chai';
import Extended from '../testClass/Extended';

describe("Extended", () => {
  let new_module;

  before(() => {
    new_module = new Extended({
      vars:{
        new_var:1,
      }
    });
  });


  it("should throw error when call render", () => {
    expect(new_module.render()).to.equal('{}');//TODO
  });

  it ('should return new_var var', () => {
    expect(new_module.vars.new_var).to.equal(1);
  });

});

describe("Extended loaded From JSON", () => {
  let new_module;

  before(() => {
    new_module = Extended.loadFromJSON(JSON.stringify({
      vars:{
        new_var:1,
      }
    }));
  });


  it("should throw error when call render", () => {
    expect(new_module.constructor).to.equal(Extended);//TODO
  });

  it("should throw error when call render", () => {
    expect(new_module.render()).to.equal('{}');//TODO
  });

  it ('should return new_var var', () => {
    expect(new_module.vars.new_var).to.equal(1);
  });
  it ('should return help string', () => {
    expect(new_module.printHelp()).to.equal('test - testing');
  });


});
