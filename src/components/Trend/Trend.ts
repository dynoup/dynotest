import { ComponentProps } from '../../packages/core/component.type';
import render from '../../packages/core/render';
import useCoreComponent from '../../packages/core/useCoreComponent';
import TrendList from './TrendList';

export default function Trend(props?: ComponentProps) {
  const componentObject = useCoreComponent({
    component: Trend,
    parent: props?.parent,
  });

  const TrendListInstance = TrendList({ parent: componentObject });

  componentObject.render = () => {
    return `
      <aside class="trend">
        <h2 class="trend-title">Trends for you</h2>

        <div class="trend-content">
          ${render(TrendListInstance)}
        </div>
      </aside>
    `;
  };

  return () => componentObject;
}
