import Module from "../../Module";
import Plugin from '../../../src/Plugin'
import MoveablePlugin from "../../../src/plugins/Moveable";
Plugin.registerPlugin('_moveable', MoveablePlugin);

class Board extends Module{

    defaultPlugins(){
        return {
            '_moveable':{
                border_x:0,
                border_y:0
            },
        }
    }

    setup(){
        let root = document.createElement('div');
        root.classList.add('board__module');
        this.elements.image = document.createElement('div');
        this.elements.image.classList.add('image');

        root.appendChild(this.elements.image);

        return root;
    }

    render(){
        this.setWindowSize(this.vars.width,this.vars.height);
    }

    setWindowSize(width, height){
        this.elements.image.style.width = width+'px';
        this.elements.image.style.height = height+'px';
    }

    defaultVars(){
        return {
            width:3000,
            height:2200
        }
    }

}
export default Board;