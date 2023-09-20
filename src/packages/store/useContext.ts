import { SetContext } from './context.type';
import { contextPool } from './context';
import { ComponentObject } from '../core/component.type';
import render from '../core/render';

/**
 * subscribe 하고 context, setContext를 return
 * TODO: useReducer 방식으로 만들어보기
 * TODO: any 타입 말고, 호출하는 쪽에서 제너릭으로 타입 지정하도록 만들기
 *
 * @param contextKey
 * @param componentInstance
 * @returns
 */
export default function useContext(
  contextKey: string,
  componentInstance: () => ComponentObject
): [any, SetContext<any>] {
  const instance = componentInstance();
  if (!instance.contextKeys.find((key) => contextKey))
    throw new Error(`${contextKey}가 제공되지 않는 컴포넌트입니다.`);

  if (
    !contextPool[contextKey].listeners.find(
      (listener) => listener === componentInstance
    )
  )
    contextPool[contextKey].listeners.push(componentInstance);

  function setContext<C>(newValue: (value: C) => C | C) {
    contextPool[contextKey].value =
      typeof newValue === 'function'
        ? newValue(contextPool[contextKey].value)
        : newValue;

    notify(contextKey);
  }

  return [() => contextPool[contextKey].value, setContext];
}

function notify(contextKey: string) {
  contextPool[contextKey].listeners.forEach((listener) => {
    render(listener);
  });
}
