import Module from "../../Module";
import Plugin from '../../../src/Plugin'
import MoveablePlugin from "../../../src/plugins/Moveable";
Plugin.registerPlugin('_moveable', MoveablePlugin);

class Board extends Module{

    defaultPlugins(){
        return {
            '_moveable':{
                border_x:2,
                border_y:2
            },
        }
    }

    setup(){
        let root = document.createElement('div');
        root.classList.add('board__module');
        root.innerHTML = 'test';

        return root;
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
            width:3000,
            height:2200
        }
    }

}
export default Board;