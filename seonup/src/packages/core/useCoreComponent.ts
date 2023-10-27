import { Component, ComponentObject } from './component.type';

let key = 0;

const coreComponentObject: ComponentObject = {
  key: '',
  component: null,
  parent: null,
  contextKeys: [],
  router: null,
  // chilren: [],
  render() {
    return '구현된 render 메서드가 없습니다.';
  },
};

export default function useCoreComponent({
  component,
  parent,
}: {
  component: Component;
  parent?: ComponentObject;
}): ComponentObject {
  const newComponent = Object.create(parent ?? coreComponentObject);

  key += 1;
  newComponent.key = component.name + key;
  newComponent.component = component;
  newComponent.parent = parent ?? null;

  return newComponent;
}
