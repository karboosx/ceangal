import Module from "../../Module";

class Button extends Module{

    setup(){
        let root = document.createElement('div');
        root.classList.add('button__module');

        this.elements.button = document.createElement('button');
        this.elements.button.classList.add('button');

        this.elements.button.addEventListener('click', () => {
            this.runEvent('click')
        });

        root.appendChild(this.elements.button);

        return root;
    }

    render(){
        this.DOMElement.style.left = this.vars.x+'px';
        this.DOMElement.style.top = this.vars.y+'px';

        this.elements.button.innerText = this.vars.text;
    }


    defaultVars(){
        return {
            text:'Text',
            x:0,
            y:0
        }
    }

}
export default Button;