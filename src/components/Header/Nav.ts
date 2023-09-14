import useCoreComponent from '../../core/useCoreComponent';
import { ComponentProps } from '../../types/component';

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
    },
  };
}
