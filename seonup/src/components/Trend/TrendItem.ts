import { ComponentProps } from '../../packages/core/component.type';
import useCoreComponent from '../../packages/core/useCoreComponent';

export default function TrendItem(props?: ComponentProps) {
  const componentObject = useCoreComponent({
    component: TrendItem,
    parent: props?.parent,
  });

  componentObject.render = () => {
    return `
      <li class="trend-item">
        <a href="">
          <p>Trending in ${props?.trend.country}South Korea</p>
          <h3>${props?.trend.keyword}</h3>
          <dl>
            <dt>Number of posts</dt>
            <dd>count: ${props?.trend.count}</dd>
          </dl>
        </a>
      </li>
    `;
  };

  return () => componentObject;
}
