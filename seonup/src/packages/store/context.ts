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

import { ContextPool } from './context.type';

export const contextPool: ContextPool = {};

// const contextPoolProxy = new Proxy(contextPool, {
//   get(target, prop) {
//     if (prop in target && typeof prop === 'string') {
//       console.log('[proxy getter]', target[prop]);
//       return target[prop];
//     }

//     console.log('[proxy getter 실패]');
//   },
//   set(target, prop, newValue, receiver) {
//     if (prop in target && typeof prop === 'string') {
//       target[prop] = newValue;
//       console.log('[proxy getter]', target[prop]);

//       return true;
//     }

//     console.log('[proxy setter 실패]');
//     return false;
//   },
// });
