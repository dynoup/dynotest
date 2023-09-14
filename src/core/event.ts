import { EventObject } from '../types/core/event';

export const events: EventObject[] = [];

export function setEvents(newEvents: EventObject[]) {
  // TODO: handler는 컴포넌트가 렌더링될 때마다 참조값이 바뀔텐데, 이걸 어떻게 동일한 handler로 인지하게 할 수 있을까? deep copy?? 함수를 컴포넌트 밖에서 선언?
  const newDeduplicatedEvents = newEvents.filter(
    ({ selector, action, handler }) =>
      events.every(
        (event) =>
          event.selector !== selector &&
          event.action !== action &&
          event.handler !== handler
      )
  );

  events.push(...newDeduplicatedEvents);
}
