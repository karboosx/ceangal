import Template from './Window.template.html'
import Module from "../../Module";
import css from './Window.scss'

class Window extends Module{

    defaultPlugins(){
        return {
            'template':{},
            'draggable':{}
        }
    }

    setup(){
        return this.template(Template);
    }

    render(){
        this.setWindowSize(this.vars.width,this.vars.height);
    }

    setWindowSize(width, height){
        this.DOMElement.style.width = width+'px';
        this.DOMElement.style.height = height+'px';
    }

    defaultVars(){
        return {
            width:150,
            height:100
        }
    }

}
export default Window;