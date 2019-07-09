import Component from "./Component";

type ComponentSkeleton = string | Object;

const reducer = async (
  acc: Component[] | Promise<Component[]>,
  skeleton: ComponentSkeleton,
  key: number
): Promise<Component[]> => {
  const isString = typeof skeleton === "string";
  const type: string = isString ? (skeleton as string) : key;

  const componentClass: Function = await import(type);
  const attr = isString ? undefined : skeleton;
  let component: Component = null;

  componentClass.call(component, attr);
  const last = await acc;

  return [...last, component];
};

const EntityFactory = (configs: ComponentSkeleton[]): Promise<Component>[] => {
  //   return configs.reduce(reducer, []);
};

export default EntityFactory;
