import TextIntro from './src/modules/TextIntro/TextIntro'
import Window from './src/modules/Window/Window'
import TrueButton from './testClass/TrueButton'
import Module from './src/Module'
import Plugin from './src/Plugin'
import Template from './src/plugins/Template'
import css from './main.scss'


Plugin.registerPlugin('template', Template);
Plugin.registerPlugin('template', Template);

(function () {

    let window = new Window();

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

    intro.setEvent('end', function () {

    });

    document.getElementById('app').appendChild(intro.renderedDOMElement);
    document.getElementById('app').appendChild(tb.renderedDOMElement);
    document.getElementById('app').appendChild(window.renderedDOMElement);

})();