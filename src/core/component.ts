import { ComponentProps } from '../types/core/component.type';
import updateNode from './diff';

export default class Component {
  name: string;
  $container: Element | null;

  constructor(props?: ComponentProps) {
    this.name = props?.name ?? 'Component';
    this.$container = props?.container ?? null;
  }

  template() {
    return '';
  }

  render() {
    const $container = this.$container
      ? (this.$container.cloneNode(true) as Element)
      : document.createElement('div');
    const $newElement = document.createElement('div');
    $newElement.innerHTML = this.template();

    // TODO: 재귀처리가 diff랑 동일함. 하나의 함수로 묶는 방법 없을까?
    const oldNodeChildNodes = [...$container.childNodes] as Element[];
    const newNodeChildNodes = [...$newElement.childNodes] as Element[];

    const totalChildNodesLength = Math.max(
      oldNodeChildNodes.length,
      newNodeChildNodes.length
    );

    for (let i = 0; i < totalChildNodesLength; i++) {
      updateNode(
        $container,
        newNodeChildNodes[i] || null,
        oldNodeChildNodes[i] || null
      );
    }

    return $container.innerHTML;
  }
}
