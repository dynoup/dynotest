import { ContextPool } from '../store/context';

export interface CurrentDoms {
  [key: string]: Element;
}
export interface ComponentProps {
  [key: string]: any;
}

export interface ComponentObject {
  type: 'component';
  key: string;
  component: Component | null;
  parentComponent: Component | null;
  contexts: ContextPool;
  // chilren: Component[],
  // getCurrentDom(): Element;
  // setCurrentDom(newCurrentDom: Element | DocumentFragment): Element;
  render(): string;
}

export interface ComponentInstance {
  (): ComponentObject;
}

export interface Component {
  (props?: ComponentProps): ComponentInstance;
}
