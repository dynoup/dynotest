import { Router } from '../../..';
import Owo from '../../../core/Component';

export default function NavButton(
  $id: string,
  $parent: HTMLDivElement,
  innerText: string
) {
  const controller = Owo($id, $parent);
  controller.template(`<button id="${innerText}">${innerText}</button>`);
  controller.onStyle({
    width: '50%',
    margin: ' 8px',
  });

  controller.onClick(innerText, () => {
    if (innerText == 'Home') {
      history.pushState(null, '', '/');
      Router.onRoute();
    }
    if (innerText == 'Bookmarks') {
      history.pushState(null, '', '/bookmark');
      Router.onRoute();
    }
    if (innerText == 'Profile') {
      history.pushState(null, '', '/profile');
      Router.onRoute();
    }
  });
}
