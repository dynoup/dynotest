import FeedList from '../components/feed/FeedList';
import Owo from '../core/Component';

export default function MainPage($id: string, $parent: HTMLDivElement) {
  const controller = Owo($id, $parent);
  controller.template('<div>userName: <div>여긴 메인 페이지 입니다</section>');
  controller.onStyle({ width: '80%' });
  FeedList('__FeedList', controller.element);
}
