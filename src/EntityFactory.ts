import Component from "./Component";
import Entity from "./Entity";

type ComponentSkeleton = string | Object;

let id = 0;
const reducer = async (
  acc: Component[] | Promise<Component[]>,
  skeleton: ComponentSkeleton
): Promise<Component[]> => {
  const isString = typeof skeleton === "string";
  let type: string = skeleton as string;
  let attr;

  if (!isString) {
    const [name] = Object.keys(skeleton);
    const [props] = Object.values(skeleton);

    type = name;
    attr = props;
  }

  const componentClass = (await import(`./${type}`)).default;
  let component: Component | {} = {};

  component = new componentClass();
  const last = await acc;

  return [...last, component as Component];
};

const EntityFactory = async (
  configs: ComponentSkeleton[]
): Promise<[Entity, Component[]]> => {
  const entity = new Entity(id++);
  const components = (await configs.reduce(reducer, [])) as Component[];
  return [entity, components];
};

export default EntityFactory;
