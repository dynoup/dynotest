import { ComponentInstance } from '../types/core/component';
import updateNode from './diff';

// FIXME: function component가 여러개 작성됐을 경우 내부 코드를 공유하고 있음... 왜지...? => 클로저 때문인듯. => 이걸로 생기는 문제가 있는지는 만들어보면서 해결하기.
export default function render(componentInstance: ComponentInstance) {
  const instance = componentInstance();
  console.log('[render]', instance.key);

  let $realDom = document.querySelector(`[data-component="${instance.key}"]`);

  if (!$realDom) {
    $realDom = document.createElement('div');
    ($realDom as HTMLElement).dataset.component = instance.key;
  }

  const $virtualDom = $realDom.cloneNode(true);
  ($virtualDom as HTMLElement).innerHTML = instance.render();

  // TODO: 재귀처리가 diff랑 동일함. 하나의 함수로 묶는 방법 없을까?
  const realDomChildNodes = [...$realDom.childNodes] as Element[];
  const virtualDomChildNodes = [...$virtualDom.childNodes] as Element[];

  const totalChildNodesLength = Math.max(
    realDomChildNodes.length,
    virtualDomChildNodes.length
  );

  for (let i = 0; i < totalChildNodesLength; i++) {
    updateNode(
      $realDom,
      virtualDomChildNodes[i] || null,
      realDomChildNodes[i] || null
    );
  }

  return $realDom.outerHTML;
}
