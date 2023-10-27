import { ComponentInstance } from '../core/component.type';
import { contextPool } from './context';

// TODO: 다른거 못 건드리게 추상화해야 하는데....
export default function createContext(contextKey: string, defaultValue: any) {
  if (contextPool[contextKey])
    throw new Error(`동일한 [context: ${contextKey}]가 이미 존재합니다.`);

  contextPool[contextKey] = {
    defaultValue,
    value: defaultValue,
    listeners: [],
    provider(componentInstance: ComponentInstance) {
      const instance = componentInstance();
      if (!instance.contextKeys.find((key) => key === contextKey))
        instance.contextKeys.push(contextKey);

      console.log('[createContext]', instance.key, instance.contextKeys);

      return () => instance;
    },
  };

  return contextPool[contextKey].provider;
}
