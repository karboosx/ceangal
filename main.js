import TextIntro from './src/basic/TextIntro/TextIntro'
import Module from './src/Module'
import css from './main.scss'

(function () {

    let intro = new TextIntro({
        vars:{
            // texts:[
            //     {
            //         text:'This is very first page!',
            //     },
            //     {
            //         text:'Long ago....',
            //     },
            //     {
            //         text:'There was a castle...',
            //     },
            //     {
            //         text:'and that\'s it!',
            //     },
            //
            // ]
        }
    });

    intro.setEvent('end', function () {

    });

    document.getElementById('app').appendChild(intro.renderedDOMElement);

})();