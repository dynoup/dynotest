import Owo from '../../core/Component';
import MainPage from '../../pages/mainPage';
import ProfilePage from '../../pages/profilePage';
import BookmarkPage from '../../pages/bookmarkPage';
import { Router } from '../..';

export default function MainContent($id: string, $parent: HTMLDivElement) {
  const controller = Owo($id, $parent);
  controller.onStyle({ width: '50vw' });
  Router.setRoutes(controller.element, {
    '/profile': () => {
      ProfilePage('__ProfilePage', controller.element);
    },
    '/': () => {
      MainPage('__MainPage', controller.element);
    },
    '/bookmark': () => {
      BookmarkPage('__BookmarkPage', controller.element);
    },
  });
  // Router.Router(controller.element);
}
