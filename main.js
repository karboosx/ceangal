import TextIntro from './src/basic/TextIntro/TextIntro'
import Module from './src/Module'


(function () {

    let intro = new TextIntro();
    intro.setEvent('end', function () {
        alert('end');
    });
    document.getElementById('app').appendChild(intro.renderedDOMElement);


})();