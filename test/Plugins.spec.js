//noinspection JSUnresolvedVariable
import { expect } from 'chai';
import Plugin from '../src/Plugin';
import Module from '../src/Module';
import Button from '../testClass/Button';
import TestPlugin from '../testClass/TestPlugin';

describe("Plugin", () => {

    before(()=>{
        Plugin.registerPlugin('test', TestPlugin);
    });

    it('should register plugin',()=>{
        expect(Plugin.plugins.test).to.equal(TestPlugin);
    });
    it('should attach plugin to module',()=>{
        let button = new Button({
            plugins:{
                test:{value:'testing'}
            }
        });

        expect(button.pluginsInstances.test).to.instanceOf(TestPlugin);
    });
    it('should access to module',()=>{
        let button = new Button({
            plugins:{
                test:{value:'testing'}
            }
        });

        expect(button.vars.plugin_test).to.equal('testing');
    });
    it('module should access to plugin',()=>{
        let button = new Button({
            plugins:{
                test:{value:'new_value'}
            }
        });

        expect(button.pluginsInstances.test.config.value).to.equal('new_value');
    });


});
