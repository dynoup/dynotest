import { fetchData } from '../../api/fetch';
import {
  ComponentInstance,
  ComponentProps,
} from '../../packages/core/component.type';
import render from '../../packages/core/render';
import useCoreComponent from '../../packages/core/useCoreComponent';
import { setEvents } from '../../packages/event/event';
import useState from '../../packages/state/useState';
import { useContext } from '../../packages/store';
import { FeedItemData } from './Feed.type';
import FeedItem from './FeedItem';

export default function Feed(props?: ComponentProps) {
  const componentObject = useCoreComponent({
    component: Feed,
    parent: props?.parent,
  });
  // TODO: 호출하는 쪽에서 제너릭으로 타입 지정하도록 만들기
  const [getCount, setCount] = useContext('count', () => componentObject);
  const [posts, setPosts] = useState(componentObject, 'posts', []);
  let FeedItemInstances: ComponentInstance[] = [];

  fetchData('/api/posts', 'GET', {
    onSuccess(data) {
      FeedItemInstances = data.posts.map((post: FeedItemData) =>
        FeedItem({ parent: componentObject, post })
      );
      console.log('[data]', data);
      setPosts(data.posts);
    },
  });

  function handleIncrementCount() {
    setCount((count: number) => count + 1);
  }

  setEvents([
    {
      componentKey: componentObject.key,
      selector: '.increment-count-button',
      action: 'click',
      handler: handleIncrementCount,
    },
  ]);

  componentObject.render = () => {
    return `
      <h3>Feed</h3>
      <p>count: ${getCount()}</p>
      <button type="button" class="increment-count-button">Count up</button>

      <div>
        ${FeedItemInstances.map((FeedItemInstance) =>
          render(FeedItemInstance)
        ).join('')}
      </div>
    `;
  };

  return () => componentObject;
}
