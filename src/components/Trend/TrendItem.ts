import { ComponentProps } from '../../packages/core/component.type';
import useCoreComponent from '../../packages/core/useCoreComponent';
import { useContext } from '../../packages/store';

export default function TrendItem(props?: ComponentProps) {
  const componentObject = useCoreComponent({
    component: TrendItem,
    parent: props?.parent,
  });

  const [getCount] = useContext('count', () => componentObject);

  componentObject.render = () => {
    return `
      <li class="trend-item">
        <a href="">
          <p>Trending in South Korea</p>
          <h3>광역버스</h3>
          <dl>
            <dt>Number of posts</dt>
            <dd>count: ${getCount()}</dd>
          </dl>
        </a>
      </li>
    `;
  };

  return () => componentObject;
}
