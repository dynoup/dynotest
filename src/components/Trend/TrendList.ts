import render from '../../core/render';
import useCoreComponent from '../../core/useCoreComponent';
import { ComponentProps } from '../../types/core/component';
import TrendItem from './TrendItem';

export default function TrendList(props?: ComponentProps) {
  const coreComponentProps = useCoreComponent('TrendList');

  return {
    ...coreComponentProps,
    render() {
      return `
        <ul class="trend-list">
          ${render(TrendItem)}
        </ul>
      `;
    },
  };
}
