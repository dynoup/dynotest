import render from '../../core/render';
import useCoreComponent from '../../core/useCoreComponent';
import { ComponentProps } from '../../types/core/component';
import TrendItem from './TrendItem';

export default function TrendList(props?: ComponentProps) {
  const componentObject = useCoreComponent({ component: TrendList });

  componentObject.render = () => {
    return `
      <ul class="trend-list">
        ${render(TrendItem)}
      </ul>
    `;
  };

  return () => componentObject;
}
