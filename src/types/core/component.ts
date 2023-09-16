import { EventObject } from './event';

export interface CurrentDoms {
  [key: string]: string;
}

export interface UseCurrentDom {
  getCurrentDom: () => string;
  setCurrentDom: (newCurrentDom: string) => string;
}

export interface ComponentProps {
  [key: string]: any;
}

export type Component = {
  (props?: ComponentProps): {
    render: () => string;
    getCurrentDom: UseCurrentDom['getCurrentDom'];
    setCurrentDom: UseCurrentDom['setCurrentDom'];
    setEvent?: (args?: EventObject) => void;
  };
};
