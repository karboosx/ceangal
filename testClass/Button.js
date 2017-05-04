import Module from '../src/Module'

class Button extends Module{


    constructor(config){
        super(config);

        this.vars_description = {
            test:'testing'
        };

        this.setEvent('add', () => this.vars.counter++);

        this.setEvent('addX', (amount) => {
            this.vars.counter = this.vars.counter+amount;
        });

    }

    defaultVars(){
        return {
            counter:0
        }
    }

    render() {
        let button = this.DOMElement;

        button.text = this.vars.counter;
        return button;
    }

    setupDefaultDOMElement() {

        //pseudo DOM button
        return {
            text:'',

            //pseudo click listener
            click:() => {
                this.runEvent('add');
            },
            dbclick:() => {
                this.runEvent('addX',5);
            }
        };

    }

}

Module.registerModule('button', Button);

export default Button;