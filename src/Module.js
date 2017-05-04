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

  printHelp() {
    let help = [];
    for (let var_name in this.vars_description) {
      help.push(var_name+' - '+this.vars_description[var_name]);
    }

    return help.join("\n");
  }
}

export default Module;
