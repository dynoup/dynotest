import { ComponentInstance } from '../core/component.type';

export type Tasks = Context['value'];

export interface DispatchProps {
  type: string;
  [key: string]: any;
}

export interface Dispatch {
  (props: DispatchProps): void;
}

export interface ContextProviderProps {
  // value: Tasks | Dispatch;
  componentInstance: ComponentInstance;
}

export interface Context {
  defaultValue: any;
  value: any;
  listeners: ComponentInstance[];
  provider(componentInstance: ComponentInstance): void;
}

export interface ContextPool {
  [contextKey: string]: Context;
}

export interface ReducerProps {
  tasks: Tasks;
  action: DispatchProps;
}

export interface SetContext<C> {
  (newValue: ((value: C) => C) | C): void;
}
