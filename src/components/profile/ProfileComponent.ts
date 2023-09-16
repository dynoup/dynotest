import Owo from '../../core/Component';
import ProfileComponent2 from './ProfileComponent2';
import { OwoPool } from '../..';

export default function ProfileComponent($id: string, $parent: HTMLDivElement) {
  const controller = Owo($id, $parent);

  // observer.subscribe('profileRepository');
  // observer.getStatePoolNames();

  controller.state = OwoPool.StatePool.profile.state;
  controller.template(
    `<div>userName: <div id="userName">${controller.state.userName}</div> <br> userId: ${controller.state.userId} <br> following: <div id="following">${controller.state.following}</div></div><button type="button" id="profileBtn">follow</button/>`
  );

  controller.onClick('profileBtn', () => {
    controller.state.following += 1;
    controller.render(['following']);
  });

  // state 변경 후
  OwoPool.StatePool.profile.emitter.on('profile', () =>
    console.log('re-render!')
  );
  // 이건 이벤트 탑재하는 것이다. 이는 컴포넌트 내부에 만들어줘야한다.

  ProfileComponent2('__test', controller.element);
}
