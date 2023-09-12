import { ComponentProps } from '../types/core/component.type';
import Component from './component';

export default function createRoot($root: Element) {
  return {
    render(component: typeof Component, props: ComponentProps) {
      const componentInstance = new component({ ...props, container: $root });
      $root.innerHTML = componentInstance.render();
    },
  };
}
