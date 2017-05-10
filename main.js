import TextIntro from './src/modules/TextIntro/TextIntro'
import Window from './src/modules/Window/Window'
import Value from './src/modules/Value/Value'
import ContextMenu from './src/modules/ContextMenu/ContextMenu'
import TrueButton from './testClass/TrueButton'
import Module from './src/Module'
import css from './main.scss'

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

    let value = new Value({
        vars:{
            x:100,
            y:20,
            value:0
        }
    });

    let tb = new TrueButton({
        id:'test',
        class:'test'
    });

    let body = document.getElementsByTagName('body')[0];
    let app = document.getElementById('app');

    value.appendTo(app);

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
            event:'alert2'
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


    body.addEventListener('contextmenu', (event)=>{
        event.preventDefault();
        contextMenu.vars.x = event.pageX;
        contextMenu.vars.y = event.pageY;
        contextMenu.appendTo(body);
        return false;
    });
    body.addEventListener('click', (event)=>{
        contextMenu.removeSelf();
    });


    for (let a=0;a<10;a++) {
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


        let button = document.createElement('button');
        button.innerText = 'Open';
        button.addEventListener('click', function () {
            win1.appendTo(app);
            value.vars.value++;
            value.refresh();
        });
        app.appendChild(button);
    }


})();