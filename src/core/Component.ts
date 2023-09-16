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
    this.element = document.getElementById($id);
  };
  // 기존 콤포
  // this.template = function (newInnerHTML: any) {
  //   this.innerHTML = newInnerHTML;
  //   this.render();
  //   this.onUpdated();
  // };
  // 기존 렌더
  // this.render = function () {
  //   const newElement = document.createElement('div');
  //   newElement.id = $id;
  //   newElement.innerHTML = this.innerHTML;
  //   this.element.replaceWith(newElement);
  //   this.element = newElement;
  // };

  // 특정 state가 들어간 값만 찾아서 바꿔야한다.

  this.template = function (newInnerHTML: any) {
    this.element.innerHTML = newInnerHTML;
  };

  this.render = function (states: string[]) {
    if (states.length > 0) {
      states.forEach((state) => {
        console.log('state', state);
        const stateValues = this.state;
        const value = stateValues[state];
        this.element.querySelector(`#${state}`).innerHTML = `${value}`;
        // const element = document.getElementById(state);
        // if (element) {
        //   element.innerHTML = `${value}`;
        // }
      });
    }
  };

  this.onMounted = function () {
    // console.log('onMounted');
  };

  this.onUnmounted = function () {
    // console.log('onUnmounted');
  };

  this.onUpdated = function () {
    // console.log('onUpdated');
  };

  this.onClick = function (target: string, event: any) {
    const element = document.getElementById(target);
    if (element) {
      element.onclick = event;
    }
  };

  this.init();
}

export default function Owo($id: string, $parent: HTMLDivElement) {
  return new (Component as any)($id, $parent);
}
