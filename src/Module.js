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
    this.loadConfig(config)
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
   * @return DOMElement
   */
  render() {
    throw new Error('render is not implemented');
  }

  static loadFromJSON(json) {
    return new this(JSON.parse(json));
  }

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
