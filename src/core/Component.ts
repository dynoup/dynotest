function Component($id: string, $parent: HTMLDivElement) {
  const Element = document.createElement('div');
  const state = {};
  this.element = Element;
  this.state = state;
  this.innerHTML = ``;

  this.init = function () {
    this.element.id = $id;
    this.element.innerHTML = '';
    $parent.appendChild(this.element);
    this.render();
    this.onMounted();
  };

  this.compo = function (newInnerHTML: any) {
    this.innerHTML = newInnerHTML;
    this.render();
    this.onUpdated();
  };

  this.render = function () {
    const newElement = document.createElement('div');
    newElement.id = $id;
    newElement.innerHTML = this.innerHTML;
    this.element.replaceWith(newElement);
    this.element = newElement;
  };

  this.onMounted = function () {
    console.log('onMounted');
  };

  this.onUnmounted = function () {
    console.log('onUnmounted');
  };

  this.onUpdated = function () {
    console.log('onUpdated');
  };

  this.init();
}

export default function Owo($id: string, $parent: HTMLDivElement) {
  return new (Component as any)($id, $parent);
}
