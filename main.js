import TextIntro from './src/modules/TextIntro/TextIntro'
import Window from './src/modules/Window/Window'
import Value from './src/modules/Value/Value'
import ContextMenu from './src/modules/ContextMenu/ContextMenu'
import Board from './src/modules/Board/Board'
import TrueButton from './testClass/TrueButton'
import Module from './src/Module'
import css from './main.scss'
import $ from 'jquery';
import 'jquery-ui-dist/jquery-ui'
import Button from "./src/modules/Button/Button";
import StaticPawn from "./src/modules/StaticPawn/StaticPawn";

(function () {


    let intro = new TextIntro({
        vars:{
            texts:[
                {
                    text:'This is very first page!',
                },
                {
                    text:'Long ago....',
                },
                {
                    text:'There was a castle...',
                },
                {
                    text:'and that\'s it!',
                    button:'End'
                },

            ]
        },
    });
    let body = document.getElementsByTagName('body')[0];
    let app = document.getElementById('app');

    let value = new Value({
        vars:{
            x:100,
            y:20,
            value:0,
            text:'Research'
        }
    });
    value.appendTo(app);
    let value2 = new Value({
        vars:{
            x:10,
            y:20,
            value:0,
            text:'Research'
        },
        class:'red'
    });

    value2.appendTo(app);

    setInterval(function () {
        value.vars.value++;
        value.refresh();
    }, 4000);
    let tb = new TrueButton({
        id:'test',
        class:'test'
    });



    //intro.appendTo(app);

    intro.setEvent('end', function () {
        tb.runEvent('add');
    });

    tb.appendTo(app);

    var menu = [
        {
            text:'Alert',
            event:'default'
        },
        {
            text:'alert2',
            event:'alert2',
            active:false
        },
        {
            text:'alert3',
            event:'alert3'
        },

    ];

    var contextMenu = new ContextMenu({
        vars:{
            menu:menu
        }
    });

    contextMenu.setEvent('alert2', () => alert('alert 2'));
    contextMenu.setEvent('alert3', () => alert('alert 3'));

    let board = new Board({
        vars:{
            width:2500,
            height:1800
        }
    });

    var boardElement = board.appendTo(app);

    board.DOMElement.addEventListener('contextmenu', (event)=>{
        event.preventDefault();

        contextMenu.vars.x = event.pageX - $(board.DOMElement).position().left;
        contextMenu.vars.y = event.pageY - $(board.DOMElement).position().top;
        console.log(contextMenu.vars);
        contextMenu.appendTo(boardElement);
        return false;
    });
    board.DOMElement.addEventListener('click', (event)=>{
        contextMenu.removeSelf();
    });

    let staticPawn = new StaticPawn({
        vars:{
            x:864,
            y:836
        }
    });

    staticPawn.appendTo(boardElement);


    let button = new Button({
        vars:{
            x:180,
            y:33,
            text:'Make sth'
        }
    });

    button.setEvent('click', function () {
        let win1 = new Window({
            vars:{
                height:100
            }
        });
        win1.DOMElement.appendChild(new TrueButton().renderedDOMElement);

        win1.DOMElement.appendChild(function () {
            let button = document.createElement('button');
            button.innerText = 'Close';
            button.addEventListener('click', function () {
                win1.removeSelf();
            });

            return button;
        }());

        win1.appendTo(app);

    });

    button.appendTo(app);


})();