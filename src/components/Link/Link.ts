import { setEvents } from '../../core/event';
import useCoreComponent from '../../core/useCoreComponent';
import { LinkComponentProps } from './Link.type';

function handleClick(e: Event) {
  e.preventDefault();
  console.log('[Link click]', (e.target as HTMLAnchorElement).textContent);
}

export default function Link(props: LinkComponentProps) {
  const coreComponentProps = useCoreComponent('Nav');

  setEvents([
    {
      selector: '.route-link',
      action: 'click',
      handler: handleClick,
    },
  ]);

  return {
    ...coreComponentProps,
    render() {
      return `
        <a href="${props.to}" class="route-link">${props.content}</a>
      `;
    },
  };
}
