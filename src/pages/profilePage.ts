import Owo from '../core/Component';
import { statePool } from '..';
import FeedList from '../components/feed/FeedList';

export default async function ProfilePage(
  $id: string,
  $parent: HTMLDivElement
) {
  const controller = Owo($id, $parent);
  await controller.onStateBind(statePool.profile);
  controller.template(
    `<button id="backspaceBtn" type="button">&lt;</button><div style="display: flex;"><img src=${controller.state.pfpUrl} alt="ProfileImage" style="width: 100px; height:100px; border-radius: 50%; object-fit: cover;" loading="lazy"/><div>userName: <div>${controller.state.userName}</div> <br> userId: ${controller.state.userId} <br> following: <h4>following: ${controller.state.following}</h4><h4 >follower: ${controller.state.follower}<//></section>`
  );
  controller.onStyle({ width: '300px' });

  controller.onClick('backspaceBtn', () => {
    // statePool.profile.notify('profile'); -> 리렌더가 필요할 때 (프록시로 리팩토링)
    history.back();
  });
  FeedList('__FeedList', controller.element);
}
