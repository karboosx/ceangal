//noinspection JSUnresolvedVariable
import { expect } from 'chai';
import Button from '../testClass/Button';
import Module from '../src/Module';

describe("Button", () => {
  let button;

  before(() => {
    button = new Button();
  });

  beforeEach(() => {
    button.vars.counter = 0;
  });

  it('should return DOMElement', function () {
    expect(button.render().text).to.equal(0);
  });

  it('should add 1 to counter', function () {
    button.render().click();
    expect(button.render().text).to.equal(1);
    button.render().click();
    expect(button.render().text).to.equal(2);
  });

  it('should add 5 to counter', function () {
    button.render().dbclick();
    expect(button.render().text).to.equal(5);
    button.render().dbclick();
    expect(button.render().text).to.equal(10);

  });

  it('should not change text when run several times', function () {
    button.render().dbclick();
    expect(button.render().text).to.equal(5);
    expect(button.render().text).to.equal(5);
    expect(button.render().text).to.equal(5);
    button.render().dbclick();
    expect(button.render().text).to.equal(10);
    expect(button.render().text).to.equal(10);
    expect(button.render().text).to.equal(10);
  });

  it('should throw error when call undefined event', function () {
    expect(() => {
      button.runEvent('not_found')
    }).to.throw('not_found is not registered');
  });


  it("should create Extended object", () => {
    let button = Module.create({
      'module-name':'button',
      'module-config':{vars:{
        counter:200
      }}
    });

    expect(button.constructor).to.equal(Button);
  });

  it("should render pseudo DOMElement", () => {
    let button = Module.create({
      'module-name':'button',
      'module-config':{vars:{
        counter:200
      }}
    });

    expect(button.render()).to.property('text');
    expect(button.render()).to.property('click');
  });
  
  it("should have working click", () => {
    let button = Module.create({
      'module-name':'button',
      'module-config':{vars:{
        counter:200
      }}
    });

    button.render().dbclick();
    expect(button.render().text).to.equal(205);
  });


});
