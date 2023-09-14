// TODO: newElement === null && oldElement 이런식으로 조건문을 작성했을 때 하위에서 newElement가 null일 수도 있다라는 ts 에러가 뜬다. 조건문 deps를 따로 나누는 것으로 해결했는데, 방법이 그거 밖에 없을까?
export default function updateNode(
  parentElement: Element,
  newElement: Element | null,
  oldElement: Element | null
) {
  console.log('[parentElement]', parentElement);
  console.log('[newElement]', newElement);
  console.log('[oldElement]', oldElement);

  // 1. oldElement는 있고 newElement는 없는 경우: oldElement를 제거한다.
  if (newElement === null) {
    if (oldElement) {
      console.log('[-----newElement 없음-----]');
      oldElement.remove();
    }
    return;
  }

  // 2. oldElement는 없고 newElement는 있는 경우: parentElement에 newElement를 추가한다.
  if (oldElement === null) {
    if (newElement) {
      console.log('[-----oldElement 없음-----]');
      parentElement.append(newElement);
    }
    return;
  }

  // 1. tag 체크
  // 1-1. oldElement와 newElement가 모두 text node일 경우: text값을 비교하고 다르면 newElement로 교체하고 return 한다.
  if (oldElement.nodeName === '#text' && newElement.nodeName === '#text') {
    if (oldElement.textContent !== newElement.textContent) {
      console.log('[-----text인데 다름-----]');
      oldElement.textContent = newElement.textContent;
    }

    console.log('[-----text인데 같음-----]');
    return;
  }

  // 1-2. oldElement와 newElement의 tag(nodeName)이 다른 경우: oldElement를 newElement로 교체하고 return 한다.
  if (oldElement.nodeName !== newElement.nodeName) {
    console.log('[-----tag 다름-----]');
    oldElement.replaceWith(newElement);
    return;
  }

  // 3. attribute 체크
  updateAttributes(oldElement, newElement);

  // 4. children 재귀
  const oldElementChildNodes = [...oldElement.childNodes] as Element[];
  const newElementChildNodes = [...newElement.childNodes] as Element[];

  const totalChildNodesLength = Math.max(
    oldElementChildNodes.length,
    newElementChildNodes.length
  );

  for (let i = 0; i < totalChildNodesLength; i++) {
    updateNode(
      oldElement,
      newElementChildNodes[i] || null,
      oldElementChildNodes[i] || null
    );
  }
}

// TODO: property(ex: checked)도 업데이트도 해주기. (필요한지 체크 해보고)
function updateAttributes(oldElement: Element, newElement: Element) {
  console.log('[-----attribute 체크-----]');
  const oldElementAttributes = [...oldElement.attributes]; // {key: value}[]
  const newElementAttributes = [...newElement.attributes];

  for (const { name, value } of newElementAttributes) {
    // 1. newElement에 있고 oldElement에 있는데 값이 같음
    if (value === oldElement.getAttribute(name)) continue;

    // 2. newElement에 있고 oldElement에 없음
    // 3. newElement에 있고 oldElement에 있는데 값이 다름
    oldElement.setAttribute(name, value);
  }

  for (const { name, value } of oldElementAttributes) {
    // 1. oldElement에 있고 newElement에 있는데 값이 같음
    if (value === newElement.getAttribute(name)) continue;

    // 2. oldElement에 있고 newElement에 없음
    if (!newElement.hasAttribute(name)) oldElement.removeAttribute(name);
  }
}
