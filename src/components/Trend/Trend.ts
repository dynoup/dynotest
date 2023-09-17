import render from '../../core/render';
import useCoreComponent from '../../core/useCoreComponent';
import { ComponentProps } from '../../types/core/component';
import TrendList from './TrendList';

export default function Trend(props?: ComponentProps) {
  const componentObject = useCoreComponent({ component: Trend });

  const TrendListInstance = TrendList();
  componentObject.render = () => {
    return `
      <aside class="trend">
        <h2 class="trend-title">Trends for you</h2>

        <div class="trend-content>
          ${render(TrendListInstance)}
        </div>
      </aside>
    `;
  };

  return () => componentObject;
}
