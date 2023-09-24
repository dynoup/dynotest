import Owo from '../core/Component';
import { statePool } from '..';

export default function ProfilePage($id: string, $parent: HTMLDivElement) {
  const controller = Owo($id, $parent);

  controller.onStateBind(statePool.profile);
  // profile -> 나중엔 좀 더 세분화 해야한다.

  controller.template(
    '<div>userName: <div>{{userName}}</div> <br> userId:{{userId}} <br> following: <div>{{following}}</div><button type="button" id="profileBtn">follow</button/></section>'
  );
  controller.onStyle({ width: '300px' });

  controller.onClick('profileBtn', () => {
    controller.state.following += 1;
    statePool.profile.notify('profile');
  });
}
