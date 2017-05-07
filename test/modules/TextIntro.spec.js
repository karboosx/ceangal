//noinspection JSUnresolvedVariable
import { expect } from 'chai';
import TextIntro from '../../src/modules/TextIntro/TextIntro';
import Module from '../../src/Module';

describe("Module TextIntro", () => {
    let intro;

    before(() => {
        intro = new TextIntro();
    });

    it('should return DOM Element', () => {
        expect(intro.renderedDOMElement).to.instanceOf(Node);
        expect(intro.DOMElement).to.instanceOf(Node);
    });

});