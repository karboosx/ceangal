import Module from "../../Module";

class TextIntro extends Module{

    defaultVars(){
        return {
            texts:[
                {
                    text:'[no text]',
                    button:'[no text]',
                },
            ],
            position:0
        }
    }

    setup(){
        this.setUpEvents();
        let root = document.createElement('div');
        this.elements.text = document.createElement('div');
        this.elements.nextButton = document.createElement('button');

        root.classList.add('text_intro');

        let viewport = document.createElement('div');
        viewport.classList.add('viewport');
        this.elements.text.classList.add('text');
        this.elements.nextButton.classList.add('button');
        this.elements.nextButton.addEventListener('click', () =>{
            this.runEvent('_next')
        });

        viewport.appendChild(this.elements.text);
        viewport.appendChild(this.elements.nextButton);
        root.appendChild(viewport);


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

            this.refresh();
        });

        this.setEvent('_finish', () => {
            this.removeSelf();

            this.tryToRunEvent('end');
        })

    }
}

Module.registerModule('test_intro', TextIntro);

export default TextIntro;