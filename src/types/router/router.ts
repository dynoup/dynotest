import { Component, ComponentProps } from '../core/component';

export type Router = {
  path: string;
  component: Component;
}[];

export interface BrowserRouterProps extends ComponentProps {
  router: any; // TODO: any말고 타입 선언해주기.
}
