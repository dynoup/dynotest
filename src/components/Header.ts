import { Nav } from '.';
import { Component } from '../core';
import { ComponentProps } from '../types/core';

export default class Header extends Component {
  constructor(props: ComponentProps) {
    super(props);
  }

  template() {
    return `
      <header class="global-header">
        <h1 class="logo">
          <a href="/">Dynotest</a>
        </h1>

        ${new Nav({ name: 'Nav' }).render()}
      </header>
    `;
  }
}
