import render from '../../core/render';
import useCoreComponent from '../../core/useCoreComponent';
import { ComponentProps } from '../../types/core/component';
// import Nav from './Nav';

export default function Header(props?: ComponentProps) {
  const componentObject = useCoreComponent({ component: Header });

  componentObject.render = () => {
    return `
        <header class="global-header">
          <h1 class="logo">
            <a href="/">Dynotest</a>
          </h1>

        </header>
      `;
  };

  return () => componentObject;
}
