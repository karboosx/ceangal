import Plugin from "../Plugin";
import $ from 'jquery';
import 'jquery-ui-dist/jquery-ui'

class Template extends Plugin{

    loaded(){
        if (this.config.hasOwnProperty('auto_size') && this.config.auto_size) {
            this.calculateSize();
        }

        this.module.addAttachedEvent((DOMElement, realDOMElement) => {
            $(realDOMElement).draggable({});//todo viewport boundaries
        });

    }


    calculateSize(){
        //todo
    }

    defaultConfig(){
        return {
            auto_size:true,
            width:100,
            height:100
        }
    }
}


export default Template;