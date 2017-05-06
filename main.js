import TextIntro from './src/modules/TextIntro/TextIntro'
import Window from './src/modules/Window/Window'
import TrueButton from './testClass/TrueButton'
import Module from './src/Module'
import Plugin from './src/Plugin'
import Template from './src/plugins/Template'
import css from './main.scss'
import Draggable from "./src/plugins/Draggable";


Plugin.registerPlugin('template', Template);
Plugin.registerPlugin('draggable', Draggable);

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

    let tb = new TrueButton();

    let app = document.getElementById('app');

    intro.appendTo(app);

    intro.setEvent('end', function () {
        tb.runEvent('add');
    });


    new Window().appendTo(app).appendChild(tb.renderedDOMElement);
    new Window().appendTo(app);
    new Window().appendTo(app);


})();