import { Component } from '../core';
import { ComponentProps } from '../types/core';

export default class Nav extends Component {
  constructor(props: ComponentProps) {
    super(props);
  }

  template() {
    return `
      <nav class="gnb">
        <h2 class="visibility-hidden">Menu</h2>
      
        <ul class="gnb-list">
          <li class="gnb-item">
            <a href="/">Home</a>
          </li>
          <li class="gnb-item">
            <a href="/bookmarks">Bookmarks</a>
          </li>
          <li class="gnb-item">
            <a href="/profile">Profile</a>
          </li>
        </ul>
      </nav>
    `;
  }
}
