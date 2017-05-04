//noinspection JSUnresolvedVariable
import { expect } from 'chai';
import Module from '../src/Module';
import Button from '../testClass/Button';
import NewModule from '../testClass/NewModule';

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

  it ('should throw exception when newModule is not registered', () => {
    expect(() => {
      let newModule = new NewModule();

      newModule.save();
    }).to.throw('Can\'t find this module');
  });

  it ('should make object who are able to use in Module.create()', () => {
    let newModule = new Button();

    expect(JSON.stringify(newModule.save())).to.equal(JSON.stringify({
      'module-name':'button',
      'module-config':{
        vars:{
          counter:0
        }
      }
    }));
  });



});
