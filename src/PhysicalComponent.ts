import Component from "./Component";

class PhysicalComponent extends Component {
  constructor(public pos: [number, number], public size: [number, number]) {
    super();
  }
}
export default PhysicalComponent;
