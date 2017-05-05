import Module from "../src/Module";

class TrueButton extends Module{
    constructor(config){
        super(config);

        this.vars_description = {
            test:'testing'
        };

        this.setEvent('add', () => {
            this.vars.counter++;
            this.render();
        });

    }

    defaultVars(){
        return {
            counter:0
        }
    }

    render() {
        let button = this.DOMElement;
        button.innerText = this.vars.counter;
        return button;
    }

    setupDefaultDOMElement() {

        let button = document.createElement('button');
        button.addEventListener('click', () => {this.runEvent('add')});

        return button;
    }

}

export default TrueButton;