import render from '../../core/render';
import useCoreComponent from '../../core/useCoreComponent';
import { ComponentProps } from '../../types/component';
import Nav from './Nav';

export default function Header(props?: ComponentProps) {
  const coreComponentProps = useCoreComponent('Header');

  return {
    ...coreComponentProps,
    render() {
      return `
        <header class="global-header">
          <h1 class="logo">
            <a href="/">Dynotest</a>
          </h1>

          ${render(Nav)}
        </header>
      `;
    },
  };
}
