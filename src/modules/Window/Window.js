import Template from './Window.template.html'
import Module from "../../Module";
import css from './Window.scss'

import Plugin from '../../../src/Plugin'
import DraggablePlugin from "../../../src/plugins/Draggable";
import TemplatePlugin from '../../../src/plugins/Template'
import CenteredPlugin from '../../../src/plugins/Centered'
Plugin.registerPlugin('_template', TemplatePlugin);
Plugin.registerPlugin('_draggable', DraggablePlugin);
Plugin.registerPlugin('_centered', CenteredPlugin);

class Window extends Module{

    defaultPlugins(){
        return {
            '_template':{},
            '_draggable':{},
            '_centered':{}
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