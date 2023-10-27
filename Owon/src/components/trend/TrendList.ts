import { statePool } from '../..';
import Owo from '../../core/Component';
import TrendCard from './TrendCard';

type Trend = {
  trendId: string;
  keyword: string;
  country: string;
  count: number;
};

export default async function TrendList($id: string, $parent: HTMLDivElement) {
  const controller = Owo($id, $parent);
  await controller.onStateBind(statePool.trend);
  controller.template(`<h2>Trends for you</h2>`);
  controller.state.forEach((content: Trend) => {
    TrendCard(`__TrendCard_${content.keyword}`, controller.element, content);
  });
  controller.onStyle({
    width: '80%',
  });
  console.log('data:', controller.state);
}
