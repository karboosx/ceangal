import Module from "../src/Module";

class TrueButton extends Module{
    constructor(config){
        super(config);

        this.setEvent('submit', () => {
            this.vars.counter++;
            this.vars.text = this.elements.input.value;
            this.render();
        });

    }

    defaultVars(){
        return {
            counter:0,
            text:'Enter text'
        }
    }

    render() {
        this.elements.input.value = this.vars.text;
        this.elements.text.innerText = this.vars.text + ' and clicked ' + this.vars.counter + ' times';
    }

    setupDefaultDOMElement() {

        let root = document.createElement('div');
        this.elements.text = document.createElement('div');
        this.elements.input = document.createElement('input');
        this.elements.button = document.createElement('button');
        this.elements.button.innerText = 'Submit';

        root.appendChild(this.elements.text);
        root.appendChild(this.elements.input);
        root.appendChild(this.elements.button);

        this.elements.button.addEventListener('click', () => {this.runEvent('submit')});

        return root;
    }

}

export default TrueButton;