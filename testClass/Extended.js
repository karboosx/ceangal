import Module from '../src/Module'

class Extended extends Module{

    constructor(config){
        super(config);

        this.vars_description = {
            test:'testing'
        };

    }

    render() {
        return JSON.stringify(this.vars);
    }

    defaultVars(){
        return {
            new_var:100
        }
    }

}

Module.registerModule('extended', Extended);

export default Extended;