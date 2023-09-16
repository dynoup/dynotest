import Owo from '../../core/Component';
import Owl from '../../core/Owl';

export default function ProfileComponent2(
  $id: string,
  $parent: HTMLDivElement
) {
  const controller = Owo($id, $parent);
  const observer = Owl();
  observer.subscribe('profileRepository');

  controller.state = { userName: 'yet', userId: 'yet', following: 0 };
  controller.template(
    `<div>userName: ${controller.state.userName} <br> userId: ${controller.state.userId} <br> following: <div id="following">${controller.state.following}</div></div><button type="button" id="profileBtn2">follow</button/>`
  );

  controller.onClick('profileBtn2', () => {
    controller.state.following += 1;
    controller.render(['following']);
  });
}
