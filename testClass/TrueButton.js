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
        this.elements.button.innerText = this.vars.counter;
    }

    setup() {

        let root = document.createElement('div');
        this.elements.button = document.createElement('button');
        this.elements.button.addEventListener('click', () => {this.runEvent('add')});

        root.appendChild(this.elements.button);
        return root;
    }

}

export default TrueButton;