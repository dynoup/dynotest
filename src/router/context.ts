/**
 * 선언할 때
 * const TasksContext = createContext(null: initialValue);
 * const TasksDispatchContext = createContext(null: initialValue);
 * function tasksReducer(task, action) { switch (action) { ... } }
 * const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
 *
 * 제공할 때
 * <TasksContext.Provider value={tasks}>
 *  <TasksDispatchContext.Provider value={dispatch}>
 *
 * 사용할 때
 * const tasks = useContext(TasksContext);
 * const dispatch = useContext(TasksDispatchContext);
 *
 * Observer + Proxy pattern
 * provider 하위 컴포넌트는 전부 listener
 *
 */

import render from '../core/render';
import { Component } from '../types/core/component';
import { ContextProviderProps, TasksCollection } from '../types/router/context';

// unsubscribe
// notify
// proxy
// tasks
// dispatch
// reducer

export function createContext(defaultValue: any) {
  let listeners: Component[] = [];
  const tasksCollection: TasksCollection = {};

  const tasksCollectionProxy = new Proxy(tasksCollection, {
    get(target, prop) {
      if (prop in target && typeof prop === 'string') {
        console.log('[proxy getter]', target[prop]);
        return target[prop];
      }

      console.log('[proxy getter 실패]');
    },
    set(target, prop, newValue, receiver) {
      if (prop in target && typeof prop === 'string') {
        target[prop] = newValue;
        console.log('[proxy getter]', target[prop]);

        return true;
      }

      console.log('[proxy setter 실패]');
      return false;
    },
  });

  function subscribe(component: Component) {
    const duplicationListener = listeners.find(
      (listener) => listener === component
    );

    if (duplicationListener) return;

    listeners = [...listeners, component];
  }

  function unsubscribe(component: Component) {
    listeners = listeners.filter((listener) => listener !== component);
  }

  function notify() {
    listeners.forEach((listener) => {
      const result = render(listener);
      console.log('[listener render]', listener, result);
    });
  }

  return {
    defaultValue,
    provider(props: ContextProviderProps) {
      props.components.forEach((component) => {
        // subscribe(component); // useContext 하는 곳에서 subscribe 해야 함. (useContext를 하는 곳이 listener임)
        // provider는 createContext로 만들어진 동일한 Context들을 참조할 수 있게 해야 함. (value로 들어온 값을 하위 컴포넌트가 볼 수 있게 해주는 역할)
      });

      // notify();
    },
  };
}

function useContext() {}
