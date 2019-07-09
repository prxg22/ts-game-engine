import Entity from "./Entity";
import Component from "./Component";

class EntityManager {
  private id = 0;
  entites: Map<Entity, Map<string, Component>>;

  constructor() {
    this.entites = new Map<Entity, Map<string, Component>>();
  }

  add(list: Component[]): Entity {
    const entity = new Entity(this.id++);
    const components = new Map<string, Component>();

    list.forEach(c => components.set(c.constructor.name, c));

    this.entites.set(entity, components);

    return entity;
  }

  private arrayFromComponents(components: Map<string, Component>) {
    return Array.from(components.values());
  }

  get(e: Entity) {
    if (!this.entites.has(e)) return undefined;
    const components = this.entites.get(e);
    return [e, this.arrayFromComponents(components)];
  }

  getElementsWithComponent(name: string): Entity[] {
    const entites = [];

    this.entites.forEach(
      (components, entity) =>
        components.has(name) &&
        entites.push([entity, this.arrayFromComponents(components)])
    );

    return entites;
  }
}

export default EntityManager;
