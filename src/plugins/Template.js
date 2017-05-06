import Plugin from "../Plugin";
class Template extends Plugin{

    loaded(){
        this.module.template = (HTMLTemplate) => {
            let templateElement = document.createElement('template');
            templateElement.innerHTML = HTMLTemplate;

            return templateElement.content.firstChild;
        };
    }


    defaultConfig(){
        return {
            visual:false
        }
    }
}


export default Template;