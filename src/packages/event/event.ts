import { EventObject } from './event.type';

export const events: EventObject[] = [];

export function setEvents(newEvents: EventObject[]) {
  const newDeduplicatedEvents = newEvents.filter(
    ({ componentKey, selector, action, handler }) => {
      return !events.some(
        (event) =>
          event.componentKey === componentKey &&
          event.selector === selector &&
          event.action === action &&
          event.handler.name === handler.name
      );
    }
  );

  events.push(...newDeduplicatedEvents);
  console.log('[후 events]', events);
}
