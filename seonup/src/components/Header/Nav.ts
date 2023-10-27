import { ComponentProps } from '../../packages/core/component.type';
import render from '../../packages/core/render';
import useCoreComponent from '../../packages/core/useCoreComponent';
import Link from '../../packages/router/Link';

export default function Nav(props?: ComponentProps) {
  const componentObject = useCoreComponent({
    component: Nav,
    parent: props?.parent,
  });

  const LinkInstance1 = Link({
    parent: componentObject,
    to: '/index.html',
    content: 'Home',
  });
  const LinkInstance2 = Link({
    parent: componentObject,
    to: '/post',
    content: 'Post',
  });
  const LinkInstance3 = Link({
    parent: componentObject,
    to: '/trends',
    content: 'Trends',
  });

  componentObject.render = () => {
    return `
        <nav class="gnb">
          <h2 class="visibility-hidden">Menu</h2>

          <ul class="gnb-list">
            <li class="gnb-item">
              ${render(() => LinkInstance1())}
            </li>
            <li class="gnb-item">
              ${render(() => LinkInstance2())}
            </li>
            <li class="gnb-item">
              ${render(() => LinkInstance3())}
            </li>
          </ul>
        </nav>
      `;
  };

  return () => componentObject;
}
