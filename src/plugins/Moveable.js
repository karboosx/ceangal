import Plugin from "../Plugin";
import $ from 'jquery';
import 'jquery-ui-dist/jquery-ui'

class Moveable extends Plugin{

    loaded(){

        this.module.addAttachedEvent((DOMElement, realDOMElement) => {

            let body = $('body');
            let width = body.width();
            let height = body.height();

            let elementWidth = $(realDOMElement).width();
            let elementHeight = $(realDOMElement).height();

            let box = [0,0,0,0];

            if (elementWidth>width){
                box[0] = -elementWidth+width-this.config.border_x;
            }
            if (elementHeight>height){
                box[1] = -elementHeight+height-this.config.border_y;
            }


            $(realDOMElement).draggable({
                containment:box,
                snapTolerance:0,
            });
        });

    }



    defaultConfig(){
        return {
            border_x:0,
            border_y:0
        }
    }
}


export default Moveable;