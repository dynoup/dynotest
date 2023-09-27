export interface State {
  defaultValue: any;
  value: any;
  didMount: boolean;
  // componentInstance: ComponentInstance;
}

export interface StatePool {
  [componentKey: string]: {
    [stateKey: string]: State;
  };
}

export interface GetState {
  (): any;
}

export interface SetState<S> {
  (newValue: ((value: S) => S) | S): void;
}
