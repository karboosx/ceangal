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

describe("Module Parenting", () => {

  it('should create parent', () => {
    let parent = new Button();

    let child = parent.create('button');
    expect(child.vars).to.property('counter', 0);
    expect(parent.childs[0]).to.equal(child);
    expect(child.getParent()).to.equal(parent);
  });

  it('should throw exception when module don\'t have parent', () => {
    expect(function () {
      new Button().getParent();
    }).to.throw('This module don\'t have parent');
  });

  it('should auto assign ID', () => {
    let parent = new Button({
      id:'test'
    });

    let buttonByID = Module.getModuleByID('test');
    expect(buttonByID).to.instanceOf(Button);

  });

  it('should throw exception when create module with existing id', () => {
    expect(function () {
      new Button({
        id:'existing_test'
      });

      new Button({
        id:'existing_test'
      });

    }).to.throw('This ID is already assigned');
  });

  it('should throw exception when getting module with non existing ID', () => {
    expect(function () {
      Module.getModuleByID('non_existing')
    }).to.throw('There is no module with that ID');
  });

});
