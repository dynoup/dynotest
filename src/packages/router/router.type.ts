import { ComponentInstance, ComponentProps } from '../core/component.type';

export type Router = {
  path: string;
  component: ComponentInstance;
}[];

export interface BrowserRouterProps extends ComponentProps {
  router: any; // TODO: any말고 타입 선언해주기.
}
