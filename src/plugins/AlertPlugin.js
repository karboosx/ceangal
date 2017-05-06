import Plugin from "../Plugin";
class AlertPlugin extends Plugin{

    loaded(){
        let button = document.createElement('button');
        button.innerText = 'Click Me';
        button.addEventListener('click', ()=>{
            alert('you clicked me! Info = '+this.config.info)
        });

        this.DOMElement.appendChild(
            button
        );
    }
}

export default AlertPlugin;