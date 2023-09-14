import render from '../../core/render';
import useCoreComponent from '../../core/useCoreComponent';
import { ComponentProps } from '../../types/core/component';

export default function TrendItem(props?: ComponentProps) {
  const coreComponentProps = useCoreComponent('TrendItem');

  return {
    ...coreComponentProps,
    render() {
      return `
        <li class="trend-item">
          <a href="">
            <p>Trending in South Korea</p>
            <h3>광역버스</h3>
            <dl>
              <dt>Number of posts</dt>
              <dd>13,030 posts</dd>
            </dl>
          </a>
        </li>
      `;
    },
  };
}
