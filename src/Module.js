class Module {

  /**
   * All necessary properties for this module
   *
   * @type Object
   */
  vars = {};

  /**
   * Help list
   *
   * @type Object
   */
  vars_description = {};

  constructor(config) {
    if (typeof config == 'object') {
      this.loadConfig(config)
    }
  }

  /**
   * Loading Config (for ex. from JSON)
   * @param config
   */
  loadConfig(config) {
    if (config.hasOwnProperty('vars')) {
      Object.assign(this.vars, config.vars);
    }
  }

  /**
   * Render this module and return finish DOMElement with all listeners
   *
   * @returns {Element}
   */
  render() {
    throw new Error('render is not implemented');
  }

  defaultDOMElement = undefined;

  /**
   * SetUp DOMElement
   *
   * @returns {Element}
   */
  setupDefaultDOMElement() {
    throw new Error('setupDOMElement is not implemented');
  }

  /**
   * Get default DOMElement
   *
   * @returns {Element}
   */
  get DOMElement() {
    if (this.defaultDOMElement == undefined){
      this.defaultDOMElement = this.setupDefaultDOMElement();
    }

    return this.defaultDOMElement;
  }

  events = {};

  setEvent(eventName, eventFunction) {
    this.events[eventName] = eventFunction;
  }

  runEvent(eventName, ...parameters) {
    this.events[eventName](...parameters);
  }


  /**
   * Make new instance of this module and load config from JSON
   *
   * @param json
   * @returns {Module}
   */
  static loadFromJSON(json) {
    return new this(JSON.parse(json));
  }

  /**
   *
   *
   * @returns {string}
   */
  printHelp() {
    let help = [];
    for (let var_name in this.vars_description) {
      help.push(var_name+' - '+this.vars_description[var_name]);
    }

    return help.join("\n");
  }

  static modules = {};

  static registerModule(moduleName, moduleClass) {
    this.modules[moduleName] = moduleClass;
  }

  static createModule(moduleName, config) {
    if (!this.modules.hasOwnProperty(moduleName)){
      throw new Error(moduleName+' is not registered');
    }

    return new this.modules[moduleName](config);
  }
}

export default Module;
