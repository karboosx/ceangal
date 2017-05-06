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

    }

}
export default Window;