export function createRoot() {
  const element = document.createElement('div');
  element.id = '__Root';
  document.body.appendChild(element);
  // 초기 css 값
  element.style.cssText = 'display: flex; width: 100vw; height: 100vh;';
  // body css 값 제거
  document.body.style.cssText =
    'margin: 0; background-color: #212121; color: #FFFFFF;';
  return element;
}
