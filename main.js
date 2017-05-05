import TrueButton from './testClass/TrueButton'
import TrueInput from './testClass/TrueInput'
import Module from './src/Module'


(function () {

    document.getElementById('app').appendChild(new TrueButton().renderedDOMElement);
    document.getElementById('app').appendChild(new TrueButton().renderedDOMElement);
    document.getElementById('app').appendChild(new TrueInput().renderedDOMElement);

    console.log(Module.modules)


})();