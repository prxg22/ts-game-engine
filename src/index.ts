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
import player from "./player";
import HealthComponent from "./HealthComponent";
import PhysicalComponent from "./PhysicalComponent";

EntityFactory(player.components)
  .then(([entity, components]) => {
    const [health, physical] = components as [
      HealthComponent,
      PhysicalComponent
    ];
    const canvas = document.getElementById("game") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");

    const render = () => {
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, 800, 600);
      const [x, y] = physical.pos;
      const [w, h] = physical.size;
      ctx.fillStyle = "#fff";
      ctx.fillRect(x, y, w, h);
      ctx.fillText(`${health.hp}`, x, y - 10, w * 4);
      if (health.dead) ctx.fillText(`dead!`, x, y + 30, w * 4);
      else ctx.fillText(`live`, x, y + 30, w * 4);
    };

    let buff = 0;
    let last = 0;
    const loop = (dt: number) => {
      buff += dt - (last || dt);
      last = dt;
      if (buff > 400) {
        health.hit(10);
        buff = 0;
      }

      render();
      if (!health.dead) window.requestAnimationFrame(loop);
    };

    window.requestAnimationFrame(loop);
  })
  .catch(console.error);
