import { Component } from './component.type';
import { events } from '../event/event';
import render from './render';

export default function createRoot($root: Element) {
  return {
    setEvents() {
      events.forEach(({ componentKey, selector, action, handler }) => {
        const newHandler =
          selector !== 'window'
            ? (e: Event) => {
                if (
                  (e.target as HTMLElement).closest(
                    `[data-component="${componentKey}"]`
                  ) &&
                  (e.target as HTMLElement).closest(selector)
                )
                  handler(e);
              }
            : handler;

        window.removeEventListener(action, newHandler);
        window.addEventListener(action, newHandler);
      });
    },
    render(component: Component) {
      $root.innerHTML = render(component());
      this.setEvents();
    },
  };
}
