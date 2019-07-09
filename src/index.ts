// ## entitymanager tests

// import Component from "./Component";
// import EntityManager from "./EntityManager";

// class HealthComponent extends Component {
//   hp: number = 100;
//   dead: boolean = false;

//   hit(h: number) {
//     this.hp -= h;
//     if (this.hp <= 0) {
//       this.hp = 0;
//       this.dead = true;
//     }
//   }

//   cure(h: number) {
//     this.hp += h;
//     this.dead = false;
//   }
// }

// class PhysicalComponent extends Component {
//   constructor(public pos: [number, number], public size: [width, height]) {
//     super();
//   }
// }

// const _p1 = [new HealthComponent(), new PhysicalComponent([200, 0], [10, 10])];
// const _p2 = [new HealthComponent()];

// const em = new EntityManager();

// const player1 = em.add(_p1);
// const player2 = em.add(_p2);

// console.log("player1", em.get(player1));
// console.log("player2", em.get(player2));
// console.log(em.getElementsWithComponent("HealthComponent"));

import EntityFactory from "./EntityFactory";
import player from "";
EntityFactory();
