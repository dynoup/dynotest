import Owo from '../../../core/Component';
import TrendList from '../../trend/TrendList';

export default function RightSidebar($id: string, $parent: HTMLDivElement) {
  const controller = Owo($id, $parent);
  controller.onStyle({ width: '27vw' });
  TrendList('__TrendList', controller.element);
}
