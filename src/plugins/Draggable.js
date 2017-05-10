import Plugin from "../Plugin";
import $ from 'jquery';
import 'jquery-ui-dist/jquery-ui'

class Template extends Plugin{

    loaded(){
        this.module.addAttachedEvent((DOMElement, realDOMElement) => {
            $(realDOMElement).draggable({
                containment:'document'
            });
        });

    }



    defaultConfig(){
        return {}
    }
}


export default Template;