//noinspection JSUnresolvedVariable
import { expect } from 'chai';
import Button from '../testClass/Button';

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
  });

  it('should add 5 to counter', function () {
    button.render().dbclick();
    expect(button.render().text).to.equal(5);
  });



});
