import { Component } from '../core/component';

export interface TasksCollection {
  [key: string]: any;
}

export interface ContextProviderProps {
  components: Component[];
  value: Tasks | Dispatch;
}

export type Tasks = TasksCollection[string];

export interface DispatchProps {
  type: string;
  [key: string]: any;
}

export interface Dispatch {
  (props: DispatchProps): void;
}

export interface Context {
  defaultValue: any;
  provider(props: ContextProviderProps): void;
}
