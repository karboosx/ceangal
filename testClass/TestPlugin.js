import Plugin from "../src/Plugin";
class TestPlugin extends Plugin{

    loaded(){
        this.module.vars.plugin_test = this.config.value;
    }
}

export default TestPlugin;