import Module from "../../Module";

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

        for (let i = 0; i < this.vars.menu.length; i++) {
            let menu = this.vars.menu[i];

            let menuElement = document.createElement('div');
            menuElement.classList.add('menu');
            menuElement.innerText = menu.text;
            menuElement.addEventListener('click', () =>{
                this.runEvent(menu.event);
            });

            root.appendChild(menuElement);
        }


        return root;
    }

    setWindowPosition(left, top){
        this.DOMElement.style.left = left+'px';
        this.DOMElement.style.top = top+'px';
    }

    render() {
        console.log(this.vars);
        this.setWindowPosition(this.vars.x, this.vars.y);
    }

}


export default ContextMenu;