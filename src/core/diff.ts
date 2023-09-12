// TODO: newNode === null && oldNode 이런식으로 조건문을 작성했을 때 하위에서 newNode가 null일 수도 있다라는 ts 에러가 뜬다. 조건문 deps를 따로 나누는 것으로 해결했는데, 방법이 그거 밖에 없을까?
export default function updateNode(
  parentNode: Element,
  newNode: Element | null,
  oldNode: Element | null
) {
  console.log('[updateNode]', parentNode, newNode, oldNode);

  // 1. oldNode는 있고 newNode는 없는 경우: oldNode를 제거한다.
  if (newNode === null) {
    if (oldNode) {
      console.log('[newNode 없음]');
      oldNode.remove();
    }
    return;
  }

  // 2. oldNode는 없고 newNode는 있는 경우: parentNode에 newNode를 추가한다.
  if (oldNode === null) {
    if (newNode) {
      console.log('[oldNode 없음]');
      parentNode.append(newNode);
    }
    return;
  }

  // 1. tag 체크
  // 1-1. oldNode와 newNode가 모두 text node일 경우: text값을 비교하고 다르면 newNode로 교체하고 return 한다.
  if (oldNode.nodeName === '#text' && newNode.nodeName === '#text') {
    if (oldNode.textContent !== newNode.textContent) {
      console.log('[text인데 다름]');
      oldNode.textContent = newNode.textContent;
    }

    console.log('[text인데 같음]');
    return;
  }

  // 1-2. oldNode와 newNode의 tag(nodeName)이 다른 경우: oldNode를 newNode로 교체하고 return 한다.
  if (oldNode.nodeName !== newNode.nodeName) {
    console.log('[tag 다름]');
    oldNode.replaceWith(newNode);
    return;
  }

  // 3. attribute 체크
  updateAttributes(oldNode, newNode);

  // 4. children 재귀
  const oldNodeChildNodes = [...oldNode.childNodes] as Element[];
  const newNodeChildNodes = [...newNode.childNodes] as Element[];

  const totalChildNodesLength = Math.max(
    oldNodeChildNodes.length,
    newNodeChildNodes.length
  );

  for (let i = 0; i < totalChildNodesLength; i++) {
    updateNode(
      oldNode,
      newNodeChildNodes[i] || null,
      oldNodeChildNodes[i] || null
    );
  }
}

// TODO: property(ex: checked)도 업데이트도 해주기. (필요한지 체크 해보고)
function updateAttributes(oldNode: Element, newNode: Element) {
  console.log('[attribute 체크');
  const oldNodeAttributes = [...oldNode.attributes]; // {key: value}[]
  const newNodeAttributes = [...newNode.attributes];

  for (const { name, value } of newNodeAttributes) {
    // 1. newNode에 있고 oldNode에 있는데 값이 같음
    if (value === oldNode.getAttribute(name)) continue;

    // 2. newNode에 있고 oldNode에 없음
    // 3. newNode에 있고 oldNode에 있는데 값이 다름
    oldNode.setAttribute(name, value);
  }

  for (const { name, value } of oldNodeAttributes) {
    // 1. oldNode에 있고 newNode에 있는데 값이 같음
    if (value === newNode.getAttribute(name)) continue;

    // 2. oldNode에 있고 newNode에 없음
    if (!newNode.hasAttribute(name)) oldNode.removeAttribute(name);
  }
}
