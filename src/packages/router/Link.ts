import { ComponentProps } from '../core/component.type';
import useCoreComponent from '../core/useCoreComponent';
import { setEvents } from '../event/event';
import { useNavigate } from '.';

// TODO: props에 to, content 필수로 할 수 있게 타입 정의하기
export default function Link(props?: ComponentProps) {
  if (!props?.to) throw new Error(`"to" property가 없습니다.`);
  if (!props?.content) throw new Error(`"content" property가 없습니다.`);

  const componentObject = useCoreComponent({
    component: Link,
    parent: props?.parent,
  });

  const navigate = useNavigate(() => componentObject);

  function handleClickLink(e: Event) {
    e.preventDefault();
    // navigate((e.target as HTMLAnchorElement).href);
    navigate(props?.to); // TODO: a태그의 href로 전달해서 이벤트 중복 제거하기. (정규표현식 필요)
  }

  setEvents([
    {
      // componentKey: 'Link',
      componentKey: componentObject.key,
      selector: '.route-link',
      action: 'click',
      handler: handleClickLink,
    },
  ]);

  componentObject.render = () => {
    return `
        <a href="${props.to}" class="route-link">${props.content}</a>
      `;
  };

  return () => componentObject;
}
