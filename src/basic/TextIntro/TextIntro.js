import Module from "../../Module";

class TextIntro extends Module{

    defaultVars(){
        return {
            texts:[
                {
                    text:'Hello',
                },
                {
                    text:'Next line',
                },
                {
                    text:'Finish Line',
                    button:'End'
                },
            ],
            position:0
        }
    }

    setupDefaultDOMElement(){
        this.setUpEvents();
        let root = document.createElement('div');
        this.elements.text = document.createElement('div');
        this.elements.nextButton = document.createElement('button');

        root.classList.add('text_intro');
        this.elements.text.classList.add('text');
        this.elements.nextButton.classList.add('button');
        this.elements.nextButton.addEventListener('click', () =>{
            this.runEvent('_next')
        });

        root.appendChild(this.elements.text);
        root.appendChild(this.elements.nextButton);


        return root;
    }

    render() {
        let position = this.vars.position;
        let texts = this.vars.texts;
        if (position<texts.length){
            this.elements.text.innerText = texts[position].text;
            this.elements.nextButton.innerText = texts[position].button || 'Next';
        }else{
            this.runEvent('_finish');
        }
    }

    setUpEvents() {
        this.setEvent('_next', () => {
            this.vars.position++;

            this.rerender();
        });

        this.setEvent('_finish', () => {
            this.DOMElement.parentNode.removeChild(this.DOMElement);

            this.tryToRunEvent('end');
        })

    }
}

Module.registerModule('test_intro', TextIntro);

export default TextIntro;