import Template from './Window.template.html'
import Module from "../../Module";

class Window extends Module{

    defaultPlugins(){
        return {
            'template':{}
        }
    }

    setup(){
        return this.template(Template);
    }

    render(){

    }

}
export default Window;