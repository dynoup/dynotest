import { ComponentProps } from '../../packages/core/component.type';
import render from '../../packages/core/render';
import useCoreComponent from '../../packages/core/useCoreComponent';
import TrendItem from './TrendItem';

export default function TrendList(props?: ComponentProps) {
  const componentObject = useCoreComponent({
    component: TrendList,
    parent: props?.parent,
  });

  const TrendItemInstance = TrendItem({ parent: componentObject });

  componentObject.render = () => {
    return `
      <ul class="trend-list">
        ${render(TrendItemInstance)}
      </ul>
    `;
  };

  return () => componentObject;
}
