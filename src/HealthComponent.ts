import Component from "./Component";

class HealthComponent extends Component {
  hp: number = 100;
  dead: boolean = false;

  hit(h: number) {
    this.hp -= h;
    if (this.hp <= 0) {
      this.hp = 0;
      this.dead = true;
    }
  }

  cure(h: number) {
    this.hp += h;
    this.dead = false;
  }
}

export default HealthComponent;
