export interface ComponentProps {
  parent?: ComponentObject;
  [key: string]: any;
}

export type ComponentType = 'component' | 'provider' | 'router';

export interface ComponentObject {
  key: string;
  component: Component | null;
  parent: Component | null;
  router: ComponentInstance | null;
  contextKeys: string[];
  // chilren: Component[],
  render(args?: any): string;
}

export interface ComponentInstance {
  (args?: any): ComponentObject;
}

export interface Component {
  (props?: ComponentProps): ComponentInstance;
}
