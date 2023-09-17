import render from '../../core/render';
import useCoreComponent from '../../core/useCoreComponent';
import { ComponentProps } from '../../types/core/component';

export default function Feed(props?: ComponentProps) {
  const componentObject = useCoreComponent({ component: Feed });

  componentObject.render = () => {
    return `
        <h3>Feed</h3>
      `;
  };

  return componentObject;
}
