import { Component } from '../types/core/component';
import { events } from './event';
import render from './render';

export default function createRoot($root: Element) {
  return {
    setEvents() {
      events.forEach(({ selector, action, handler }) => {
        const newHandler =
          selector !== 'window'
            ? (e: Event) => {
                if ((e.target as HTMLElement).closest(selector)) handler(e);
              }
            : handler;

        window.removeEventListener(action, newHandler);
        window.addEventListener(action, newHandler);
      });
    },
    render(component: Component) {
      $root.innerHTML = render(component);
      this.setEvents();
    },
  };
}
