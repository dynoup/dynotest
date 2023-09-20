import { ComponentProps } from '../../packages/core/component.type';
import render from '../../packages/core/render';
import useCoreComponent from '../../packages/core/useCoreComponent';
import Nav from './Nav';

export default function Header(props?: ComponentProps) {
  const componentObject = useCoreComponent({
    component: Header,
    parent: props?.parent,
  });

  const NavInstance = Nav({ parent: componentObject });

  componentObject.render = () => {
    return `
        <header class="global-header">
          <h1 class="logo">
            <a href="/">Dynotest</a>
          </h1>

          ${render(NavInstance)}
        </header>
      `;
  };

  return () => componentObject;
}
