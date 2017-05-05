import TrueButton from './testClass/TrueButton'


(function () {
    let trueButton = new TrueButton();
    console.log('button');
    document.getElementById('app').appendChild(trueButton.render());

})();