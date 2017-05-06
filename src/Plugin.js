class Plugin {

    constructor(config, module) {

        this.config = {
            visual:true
        };

        Object.assign(this.config, this.defaultConfig());

        Object.assign(this.config, config);

        this.module = module;

        if (this.config.hasOwnProperty('visual') && this.config.visual === true) {
            this.DOMElement = module.DOMElement;
        }

        this.loaded();
    }

    /**
     * Function to override
     * It's called after module was created
     */
    loaded(){
        throw new Error('loaded function in not implemented')
    }

    /**
     * Override this if you want set default config
     *
     * @returns {Object}
     */
    defaultConfig(){
        return {};
    }

    /**
     * Register new plugin
     *
     * @param pluginName
     * @param pluginClass
     */
    static registerPlugin(pluginName, pluginClass) {
        Plugin.plugins[pluginName] = pluginClass;
    }

    /**
     * Create new instance of plugin
     *
     * @param pluginName
     * @param config
     * @param module
     */
    static createPlugin(pluginName, config, module) {
        if (!Plugin.plugins.hasOwnProperty(pluginName)){
            throw new Error(pluginName+' is not registered');
        }

        return new Plugin.plugins[pluginName](config, module);
    }

}

Plugin.plugins = {};

export default Plugin;