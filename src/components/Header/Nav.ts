import render from '../../core/render';
import useCoreComponent from '../../core/useCoreComponent';
import { ComponentProps } from '../../types/core/component';
import Link from '../Link/Link';

export default function Nav(props?: ComponentProps) {
  const coreComponentProps = useCoreComponent('Nav');

  return {
    ...coreComponentProps,
    render() {
      return `
        <nav class="gnb">
          <h2 class="visibility-hidden">Menu</h2>
        
          <ul class="gnb-list">
            <li class="gnb-item">
              ${render(() => Link({ to: '/', content: 'Home' }))}
            </li>
            <li class="gnb-item">
              ${render(() => Link({ to: '/bookmarks', content: 'Bookmarks' }))}
            </li>
            <li class="gnb-item">
              ${render(() => Link({ to: '/profile', content: 'Profile' }))}
            </li>
          </ul>
        </nav>
      `;
    },
  };
}
