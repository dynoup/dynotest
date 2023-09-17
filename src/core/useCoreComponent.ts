import {
  Component,
  ComponentObject,
  CurrentDoms,
} from '../types/core/component';

const currentDoms: CurrentDoms = {};
let key = 0;

const coreComponentObject: ComponentObject = {
  type: 'component',
  key: '',
  component: null,
  parentComponent: null,
  contexts: {},
  // chilren: [],
  // getCurrentDom() {
  //   return currentDoms[this.key];
  // },
  // setCurrentDom(newCurrentDom: Element) {
  //   currentDoms[this.key] = newCurrentDom;
  //   return currentDoms[this.key];
  // },
  render() {
    return '구현된 render 메서드가 없습니다.';
  },
};

export default function useCoreComponent({
  component,
  parentComponent,
}: {
  component: Component;
  parentComponent?: Component;
}) {
  const newComponent = Object.create(parentComponent ?? coreComponentObject);
  key += 1;
  newComponent.key = component.name + key;
  newComponent.component = component;
  newComponent.parentComponent = parentComponent ?? null;
  // newComponent.setCurrentDom(document.createElement('div'));

  return newComponent;
}
