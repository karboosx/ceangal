class Module {

  vars = {};

  vars_description = {};

  constructor(config) {
    this.loadConfig(config)
  }

  loadConfig(config) {
    if (config.hasOwnProperty('vars')) {
      Object.assign(this.vars, config.vars);
    }
  }

  render() {
    throw new Error('render is not implemented');
  }

  static loadFromJSON(json) {
    return new this(JSON.parse(json));
  }
}

export default Module;
