import Plugin from "../Plugin";
import $ from 'jquery';
import 'jquery-ui-dist/jquery-ui'

class Centered extends Plugin{

    loaded(){
        this.module.addAttachedEvent((DOMElement, realDOMElement) => {
            let el = $(realDOMElement);
            let body = $('body');

            let widthElement = el.width();
            let heightElement = el.height();

            let widthBody = body.width();
            let heightBody = body.height();

            el.css({
                left:widthBody/2-widthElement/2,
                top:heightBody/2-heightElement/2,
            });



        });

    }



    defaultConfig(){
        return {}
    }
}


export default Centered;