import { ComponentProps } from '../../packages/core/component.type';
import useCoreComponent from '../../packages/core/useCoreComponent';
import { setEvents } from '../../packages/event/event';
import { useContext } from '../../packages/store';

export default function Feed(props?: ComponentProps) {
  const componentObject = useCoreComponent({
    component: Feed,
    parent: props?.parent,
  });
  // TODO: 호출하는 쪽에서 제너릭으로 타입 지정하도록 만들기
  const [getCount, setCount] = useContext('count', () => componentObject);

  function handleIncrementCount() {
    console.log('[handleIncrementCount]');
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
    `;
  };

  return () => componentObject;
}
