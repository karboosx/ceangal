import Module from "../../Module";
import ContextMenu from "../ContextMenu/ContextMenu";
import $ from 'jquery';
import 'jquery-ui-dist/jquery-ui'

class StaticPawn extends Module{

    setup(){
        let root = document.createElement('div');
        root.classList.add('static_pawn__module');

        this.elements.button = document.createElement('div');
        this.elements.button.classList.add('button');

        this.elements.button.addEventListener('click', () => {
            this.runEvent('click')
        });

        this.elements.contextMenu = new ContextMenu({
            vars:{
                menu:this.vars.menu
            }
        });

        var contextMenu = this.elements.contextMenu;

        root.addEventListener('contextmenu', (event)=>{
            event.preventDefault();
            event.stopPropagation();
            contextMenu.vars.x = $(root).width();
            contextMenu.vars.y = 0;
            console.log(contextMenu.vars);
            contextMenu.appendTo(root);
            return false;
        });

        //TODO better solution for closing this context menu
        document.getElementsByTagName('body')[0].addEventListener('click', (event)=>{
            contextMenu.removeSelf();
        });
        document.getElementsByTagName('body')[0].addEventListener('contextmenu', (event)=>{
            contextMenu.removeSelf();
        });

        root.appendChild(this.elements.button);

        return root;
    }

    render(){
        this.DOMElement.style.left = this.vars.x+'px';
        this.DOMElement.style.top = this.vars.y+'px';

        this.elements.button.innerText = this.vars.text;

        this.elements.contextMenu.render();
    }


    defaultVars(){
        return {
            name:'Text',
            text:'Text',
            x:0,
            y:0,
            menu:[
                {
                    text:'Default action',
                    event:'default',
                },
            ]
        }
    }

}
export default StaticPawn;