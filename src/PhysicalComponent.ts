import Component from "./Component";

interface PhysicalConfig {
  pos: [number, number];
  size: [number, number];
}

class PhysicalComponent extends Component {
  public pos: [number, number];
  public size: [number, number];

  constructor({ pos = [0, 0], size = [0, 0] }: PhysicalConfig) {
    super();
    this.pos = pos;
    this.size = size;
  }
}
export default PhysicalComponent;
