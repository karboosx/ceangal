import TextIntro from './src/basic/TextIntro/TextIntro'
import Module from './src/Module'
import css from './main.scss'

(function () {

    let intro = new TextIntro();
    intro.setEvent('end', function () {
        alert('end');
    });
    document.getElementById('app').appendChild(intro.renderedDOMElement);


})();