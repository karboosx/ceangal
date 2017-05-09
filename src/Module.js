import Plugin from './Plugin'

class Module {

  constructor(config) {
    /**
     * All necessary properties for this module
     *
     * @type {Object}
     */
    this.vars = {};

    /**
     * Help list
     *
     * @type {Object}
     */
    this.vars_description = {};

    /**
     * Default values for this.var
     *
     * @type {Object}
     */

    this.defaultVars_ = this.defaultVars();

    this.defaultPlugins_ = this.defaultPlugins();

    /**
     * All events assigned to this module
     * @type {Object}
     */
    this.events = {};

    this.defaultDOMElement = undefined;

    this.elements = {};

    this.childs = [];

    this.parent = undefined;

    this.id = undefined;

    this.class = undefined;

    this.plugins = {};

    this.pluginsInstances = {};

    this.attachedEvents = [];

    this.flags = {
      attachedEvents:false
    };


    if (typeof this.defaultVars_ == 'object') {
      Object.assign(this.vars, this.defaultVars_);
    }

    if (typeof this.defaultPlugins_ == 'object') {
      Object.assign(this.plugins, this.defaultPlugins_);
    }

    if (typeof config == 'object') {
      this.loadConfig(config)
    }

    this.mountPlugins();
  }

  getParent() {
    if (this.parent == undefined){
      throw new Error('This module don\'t have parent');
    }
    return this.parent;
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
   * Override this if you want set default Plugins which have to be attached to module
   * Syntax: {[plugin_name]:[plugin_config]}
   * Syntax Example: {template:{minify:true}}
   *
   * @returns {Object}
   */
  defaultPlugins(){
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

    if (config.hasOwnProperty('id')) {
      Module.assignID(config.id, this);
      this.id = config.id;
    }

    if (config.hasOwnProperty('class')) {
      this.class = config.class;
    }

    if (config.hasOwnProperty('plugins')) {
      this.plugins = config.plugins;
    }

  }

  /**
   * Create and attach all plugins to this module
   */
  mountPlugins(){
    for (var pluginName in this.plugins) {
      let plugin = Plugin.createPlugin(pluginName, this.plugins[pluginName], this);
      this.pluginsInstances[pluginName] = plugin;
    }

  }

  /**
   * Render this module and return finish DOMElement with all listeners
   *
   * @param defaultElement
   * @returns {Element}
   */
  render(defaultElement) {
    throw new Error('render is not implemented');
  }

  /**
   * Render this module and return finish DOMElement with all listeners
   *
   * @returns {undefined}
   */
  refresh() {
    this.render(this.DOMElement);
  }



  /**
   * SetUp DOMElement
   *
   * @returns {Element}
   */
  setup() {
    throw new Error('setupDOMElement is not implemented');
  }

  /**
   * Add new Attached Event
   * All this events will be fire when attach function is call
   *
   * @param eventFunction
   */
  addAttachedEvent(eventFunction) {
    this.attachedEvents.push(eventFunction);
  }

  /**
   * Run attached events to DOM Element who been append on screen
   *
   * @param {Node} realDOMElement
   * @returns {Node}
   */
  attach(realDOMElement) {
    setTimeout(() => {
      this.runAttachedFunction(realDOMElement);
      this.attached();
    }, 1);
    return realDOMElement;
  }

  /**
   * Event fired when attach element to document
   *
   */
  attached() {}


  /**
   * Append module DOM Element to existing one on screen
   *
   * @param elementToAttach
   * @returns {Node}
   */
  appendTo(elementToAttach){
    let realDOMElement = elementToAttach.appendChild(this.renderedDOMElement);
    this.attach(realDOMElement);
    return realDOMElement;
  }

  /**
   * Execute all attached events
   *
   * @param {Node} realDOMElement
   */
  runAttachedFunction(realDOMElement){

    if (this.flags.attachedEvents) return;

    for (var i = 0; i < this.attachedEvents.length; i++) {
      var attachedEvent = this.attachedEvents[i];
      attachedEvent(this.DOMElement, realDOMElement);
    }

    this.flags.attachedEvents = true;
  }
  /**
   * Get default DOMElement
   *
   * @returns {Element}
   */
  get DOMElement() {
    if (this.defaultDOMElement == undefined) {
      this.make();
    }
    return this.defaultDOMElement;
  }

  /**
   * Making default DOM Element
   */
  make() {
    this.defaultDOMElement = this.setup();

    if (this.id != undefined){
      this.defaultDOMElement.setAttribute('id', this.id);
    }

    if (this.class != undefined){
      this.defaultDOMElement.className += " "+this.class;
    }

  }

  /**
   * Get default DOMElement
   *
   * @returns {Element}
   */
  get renderedDOMElement() {
    this.render(this.DOMElement);
    return this.DOMElement;
  }


  /**
   * Set new event
   *
   * @param eventName
   * @param eventFunction
   */
  setEvent(eventName, eventFunction) {
    this.events[eventName] = eventFunction;
  }

  /**
   * Run saved event
   *
   * @param eventName
   * @param parameters
   */
  runEvent(eventName, ...parameters) {
    if (!this.events.hasOwnProperty(eventName)){
      throw new Error(eventName+' is not registered');
    }

    this.tryToRunEvent(eventName, ...parameters);

  }

  /**
   * Execute event
   *
   * @param eventName
   * @param parameters
   */
  tryToRunEvent(eventName, ...parameters) {
    if (this.events.hasOwnProperty(eventName)) {
      this.events[eventName](...parameters);
    }
  }

  removeSelf(){
    if (this.DOMElement != undefined && this.DOMElement.parentNode != undefined){
      this.DOMElement.parentNode.removeChild(this.DOMElement);
    }
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
   * Return help string
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

  /**
   * Register new module for use by Module.create or Module.createModule
   *
   * @param moduleName
   * @param moduleClass
   */
  static registerModule(moduleName, moduleClass) {
    Module.modules[moduleName] = moduleClass;
  }

  //TODO namespace's

  /**
   * Create module instance by passing their name and config
   *
   * @param moduleName
   * @param config
   */
  static createModule(moduleName, config) {
    if (!this.modules.hasOwnProperty(moduleName)){
      throw new Error(moduleName+' is not registered');
    }

    return new this.modules[moduleName](config);
  }

  /**
   * Create module instance by passing their name and config and assign parent-child relationship
   *
   * @param moduleName
   * @param config
   */
  create(moduleName, config) {
    let child = Module.createModule(moduleName, config);

    child.parent = this;
    this.childs.push(child);

    return child;
  }

  /**
   * Create instance of module just by passing it saved data
   *
   * @param moduleObjectData
   * @returns {Module}
   */
  static create(moduleObjectData){
    if (typeof moduleObjectData !== 'object')
      throw new Error('Module.create() accept only Object parameters');

    if (!moduleObjectData.hasOwnProperty('module-name') || !moduleObjectData.hasOwnProperty('module-config'))
      throw new Error('This is not proper moduleObjectData format');

    return this.createModule(moduleObjectData['module-name'], moduleObjectData['module-config']);
  }

  /**
   * Assign new ID for provided module
   *
   * @param id
   * @param module
   * @returns {Module}
   */
  static assignID(id, module){
    if (Module.ids.hasOwnProperty(id))
      throw new Error('This ID is already assigned');

    if (typeof module !== 'object')
      throw new Error('Module.assignID() accept only Object parameters');

    Module.ids[id] = module;

    return module;
  }

  /**
   * Get Module by ID
   *
   * @param id
   * @returns {Module}
   */
  static getModuleByID(id){
    if (!Module.ids.hasOwnProperty(id))
      throw new Error('There is no module with that ID');

    return Module.ids[id];
  }



  /**
   * Get registered module name by passing module instance
   *
   * @param Class
   * @returns {string|null}
   */
  static getModuleNameByClass(Class){
      for (var moduleName in this.modules) {
          if (this.modules[moduleName] === Class.constructor)
              return moduleName;
      }

      return null;
  }

  /**
   * Return saved version of module
   * For use by Module.create
   *
   * @returns {Object}
   */
  save(){
      let moduleName = Module.getModuleNameByClass(this);

      if (moduleName == null){
          throw new Error('Can\'t find this module');
      }

      let config = {
        vars:this.vars,
      };

      if (this.id != undefined){
        config.id = this.id;
      }
      //TODO saving children's
      return {
          'module-name':moduleName,
          'module-config':config
      }
  }
}

Module.modules = {};
Module.ids = {};

export default Module;
