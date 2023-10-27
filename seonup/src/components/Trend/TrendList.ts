import { fetchData } from '../../api/fetch';
import {
  ComponentInstance,
  ComponentProps,
} from '../../packages/core/component.type';
import render from '../../packages/core/render';
import useCoreComponent from '../../packages/core/useCoreComponent';
import useState from '../../packages/state/useState';
import { TrendInfo } from './Trend.type';
import TrendItem from './TrendItem';

export default function TrendList(props?: ComponentProps) {
  const componentObject = useCoreComponent({
    component: TrendList,
    parent: props?.parent,
  });
  const [getTrends, setTrends] = useState(componentObject, 'trends', []);
  let TrendItemInstances: ComponentInstance[] = [];

  fetchData('/api/trends', 'GET', {
    onSuccess: (data) => {
      TrendItemInstances = data.trends.map((trend: TrendInfo) =>
        TrendItem({ parent: componentObject, trend })
      );
      setTrends(data.trends);
    },
    onError: (error) => {
      console.log('[onError]', error);
    },
  });

  componentObject.render = () => {
    return `
      <ul class="trend-list">
        ${TrendItemInstances.map((TrendItemInstance: ComponentInstance) =>
          render(TrendItemInstance)
        ).join('')}
      </ul>
    `;
  };

  return () => componentObject;
}
