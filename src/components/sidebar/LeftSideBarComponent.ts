import Owo from '../../core/Component';
import ButtonComponent from './RightSideBarComponent';

const btnList: string[] = [
  'Home',
  'Explore',
  'Notifications',
  'Messages',
  'Lists',
  'Bookmarks',
  'Communities',
  'Verified',
  'Profile',
  'More',
];

export default function LeftSideBarComponent(
  $id: string,
  $parent: HTMLDivElement
) {
  const controller = Owo($id, $parent);

  btnList.map((btn) => {
    ButtonComponent(`__LeftSideBarBtn_${btn}`, controller.element, btn);
  });
}
