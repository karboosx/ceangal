import TrueButton from './testClass/TrueButton'


(function () {
    let trueButton = new TrueButton();

    document.getElementById('app').appendChild(trueButton.render());

})();