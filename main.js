import TextIntro from './src/modules/TextIntro/TextIntro'
import TrueButton from './testClass/TrueButton'
import Module from './src/Module'
import Plugin from './src/Plugin'
import AlertPlugin from './src/plugins/AlertPlugin'
import css from './main.scss'

Plugin.registerPlugin('alert', AlertPlugin);

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
        plugins:{
            alert:{}
        }
    });

    let tb = new TrueButton({
        plugins:{
            alert:{info:'tb'}
        }
    });

    intro.setEvent('end', function () {

    });

    document.getElementById('app').appendChild(intro.renderedDOMElement);
    document.getElementById('app').appendChild(tb.renderedDOMElement);

})();