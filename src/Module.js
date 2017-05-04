class Module {

  /**
   * All necessary properties for this module
   *
   * @type {Object}
   */
  vars = {};

  /**
   * Help list
   *
   * @type {Object}
   */
  vars_description = {};

  /**
   * Default values for this.var
   *
   * @type {Object}
   */
  defaultVars_ = undefined;

  constructor(config) {
    this.defaultVars_ = this.defaultVars();

    if (typeof this.defaultVars_ == 'object') {
      Object.assign(this.vars, this.defaultVars_);
    }

    if (typeof config == 'object') {
      this.loadConfig(config)
    }
  }

  /**
   * Override this if you want set default Vars
   *
   * @returns {Object}
   */
  defaultVars(){
    return {};
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
    if (!this.events.hasOwnProperty(eventName)){
      throw new Error(eventName+' is not registered');
    }

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

  static create(moduleObjectData){
    if (typeof moduleObjectData !== 'object')
      throw new Error('Module.create() accept only Object parameters');

    if (!moduleObjectData.hasOwnProperty('module-name') || !moduleObjectData.hasOwnProperty('module-config'))
      throw new Error('This is not proper moduleObjectData format');

    return this.createModule(moduleObjectData['module-name'], moduleObjectData['module-config']);
  }

  static getModuleNameByClass(Class){
      for (var moduleName in this.modules) {
          if (this.modules[moduleName] === Class.constructor)
              return moduleName;
      }

      return null;
  }

  save(){
      let moduleName = Module.getModuleNameByClass(this);

      if (moduleName == null){
          throw new Error('Can\'t find this module');
      }

      return {
          'module-name':moduleName,
          'module-config':{
              vars:this.vars
          }
      }
  }
}

export default Module;
