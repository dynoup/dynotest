import { Component } from '../types/component';
import render from './render';

export default function createRoot($root: Element) {
  return {
    render(component: Component) {
      $root.innerHTML = render(component);
      console.log('--------------------render끝--------------------');
    },
  };
}
