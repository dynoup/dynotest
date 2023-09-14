import render from '../../core/render';
import useCoreComponent from '../../core/useCoreComponent';
import { ComponentProps } from '../../types/component';
import TrendList from './TrendList';

export default function Trend(props?: ComponentProps) {
  const coreComponentProps = useCoreComponent('Trend');

  return {
    ...coreComponentProps,
    render() {
      return `
        <aside class="trend">
          <h2 class="trend-title">Trends for you</h2>

          <div class="trend-content>
            ${render(TrendList)}
          </div>
        </aside>
      `;
    },
  };
}
