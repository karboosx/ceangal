import TrueButton from './testClass/TrueButton'
import TrueInput from './testClass/TrueInput'


(function () {

    document.getElementById('app').appendChild(new TrueButton().renderedDOMElement);
    document.getElementById('app').appendChild(new TrueButton().renderedDOMElement);
    document.getElementById('app').appendChild(new TrueInput().renderedDOMElement);



})();