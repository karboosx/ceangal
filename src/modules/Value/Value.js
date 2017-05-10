import Module from "../../Module";
import css from './Value.scss'

class Value extends Module{

    setup(){
        let root = document.createElement('div');
        root.classList.add('value__module');

        this.elements.text = document.createElement('div');
        this.elements.text.classList.add('text');

        root.appendChild(this.elements.text);

        this.elements.value = document.createElement('div');
        this.elements.value.classList.add('value');

        root.appendChild(this.elements.value);

        return root;
    }

    render(){
        this.DOMElement.style.left = this.vars.x+'px';
        this.DOMElement.style.top = this.vars.y+'px';

        this.elements.text.innerText = this.vars.text;
        this.elements.value.innerText = this.vars.value;
    }


    defaultVars(){
        return {
            text:'Text',
            value:'Value',
            x:0,
            y:0
        }
    }

}
export default Value;