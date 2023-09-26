import Owo from '../../../core/Component';
import LogoButton from '../../common/LogoButton';
import SubmitButton from '../../common/SubmitButton';
import NavButton from './NavButton';

const btnList: string[] = [
  'X',
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

export default function LeftSidebar($id: string, $parent: HTMLDivElement) {
  const controller = Owo($id, $parent);
  controller.onStyle({ width: '20vw' });
  // LogoButton('__LeftSidebarBtn_Logo', controller.element, 'X');
  btnList.map((btn) => {
    NavButton(`__LeftSidebarBtn_${btn}`, controller.element, btn);
  });
  SubmitButton('__LeftSidebarBtn_Post', controller.element, 'Post');
}
