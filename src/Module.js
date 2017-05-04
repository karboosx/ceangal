class Module {

  vars = {};

  vars_description = {};

  constructor(config) {
    this.loadConfig(config)
  }

  loadConfig(config) {
    Object.assign(this.vars, config.vars);
  }

  render() {
    throw new Error('render is not implemented');
  }
}

export default Module;
