import { ComponentObject } from '../core/component.type';
import render from '../core/render';
import { GetState, SetState, StatePool } from './useState.type';

const statePool: StatePool = {};

export default function useState(
  componentObject: ComponentObject,
  stateKey: string,
  defaultValue: any
): [GetState, SetState<any>] {
  let state = statePool[componentObject.key];

  if (!state) {
    statePool[componentObject.key] = {
      [stateKey]: {
        defaultValue,
        value: defaultValue,
        didMount: false,
      },
    };
    state = statePool[componentObject.key];
  }

  function getState() {
    console.log(componentObject.key, state);
    return state[stateKey].value;
  }

  function setState<S>(newValue: (value: S) => S | S) {
    state[stateKey] = {
      ...state[stateKey],
      value:
        typeof newValue === 'function'
          ? newValue(state[stateKey].value)
          : newValue,
    };

    render(() => componentObject);
  }

  return [getState, setState];
}
