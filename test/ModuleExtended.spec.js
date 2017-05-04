//noinspection JSUnresolvedVariable
import { expect } from 'chai';
import Module from '../src/Module';
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

describe("Extended created from Module.createModule", () => {
  let new_module;

  before(() => {
    new_module = Module.createModule('extended',{
      vars:{
        new_var:1,
      }
    });
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

  it ('should throw error when can\'t find module', () => {

    expect(function () {
      let test = Module.createModule('not_found',{});
    }).to.throw('not_found is not registered');
  });

});
