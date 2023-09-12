export default function createRoot() {
  const element = document.createElement('div');
  element.id = '__App';
  document.body.appendChild(element);
  return element;
}
