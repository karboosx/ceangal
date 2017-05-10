import Module from "../../Module";
import $ from 'jquery';
import 'jquery-ui-dist/jquery-ui'

class ContextMenu extends Module{

    defaultVars(){
        return {
            menu:[
                {
                    text:'[no text]',
                    event:'default',
                },
            ],
            x:0,
            y:0
        }
    }

    setup(){
        let root = document.createElement('div');
        root.classList.add('context_menu__module');

        this.elements.menus = [];

        for (let i = 0; i < this.vars.menu.length; i++) {
            let menu = this.vars.menu[i];

            let menuElement = document.createElement('div');
            menuElement.classList.add('menu');
            menuElement.innerText = menu.text;

            if (menu.hasOwnProperty('active') && !menu.active){
                menuElement.setAttribute('disabled','disabled');
                menuElement.classList.add('disabled');
            }else {
                menuElement.addEventListener('click', () => {
                    this.runEvent(menu.event);
                    this.removeSelf();
                });
            }

            this.elements.menus.push(menuElement);

            root.appendChild(menuElement);
        }


        return root;
    }

    setWindowPosition(left, top){
        this.DOMElement.style.left = left+'px';
        this.DOMElement.style.top = top+'px';
    }

    render() {
        this.setWindowPosition(this.vars.x, this.vars.y);

        for (let i = 0; i < this.elements.menus.length; i++) {
            let menu = $(this.elements.menus[i]);
            menu.css({
                opacity:0,
                left:-10*i+20
            });

            setTimeout(() => {
                menu.animate({
                    opacity:1,
                    left:0
                },160);
            },i*60);
        }

    }

}


export default ContextMenu;