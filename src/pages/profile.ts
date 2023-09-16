import ProfileComponent from '../components/profile/ProfileComponent';
import Owo from '../core/Component';

export default function ProfilePage($id: string, $parent: HTMLDivElement) {
  const controller = Owo($id, $parent);
  controller.template(`<div>여기에 프로필입니다</div>`);

  ProfileComponent('__ProfileComponent', controller.element);
}
