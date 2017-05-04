//noinspection JSUnresolvedVariable
import { expect } from 'chai';
import Module from '../src/Module';

describe("Module", () => {
  let new_module;

  before(() => {
    new_module = new Module({
      vars:{
        test:1,
        new_var:'test',
      }
    });
  });


  it("should throw error when call render", () => {
    expect(function () {
      new_module.render();
    }).to.throw('render is not implemented');
  });

  it ('should return test var', () => {
    expect(new_module.vars.test).to.equal(1);
  });

  it ('should return new_var var', () => {
    expect(new_module.vars.new_var).to.equal('test');
  });

});
