class Component {
  public name: string;

  init() {
    debugger;
    this.name = this.constructor.name;
  }
}

export default Component;
