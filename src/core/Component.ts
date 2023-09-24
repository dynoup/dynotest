const regex = /\{{(.*?)}}/g;
type styleObject = {
  [property: string]: string;
};

function Component($id: string, $parent: HTMLDivElement) {
  const Element = document.createElement('div');
  const state = {};

  this.element = Element;
  this.state = state;
  this.stateList = [];
  this.eventList = {};
  this.innerHTML = '';
  this.style = '';

  this.init = () => {
    this.element.id = $id;
    this.element.innerHTML = '';
    $parent.appendChild(this.element);
    this.element = document.getElementById($id);
  };

  this.template = (newInnerHTML: any) => {
    this.innerHTML = newInnerHTML;
    this.element.innerHTML = `${newInnerHTML}`;
    // 템플릿 초기화
    this.stateList = this.innerHTML.match(regex) || [];
    // state의 목록을 저장해두고 리렌더 할 때 목록을 방문하며 데이터를 넣어준다.
    this.render();
  };

  this.render = () => {
    let oldInnerHTML = this.innerHTML;
    if (this.stateList.length > 0) {
      this.stateList.forEach((item: string) => {
        oldInnerHTML = oldInnerHTML.replaceAll(
          item,
          this.state[item.slice(2, -2)]
        );
      });
      this.element.firstChild.innerHTML = oldInnerHTML;
      this.onEventBind();
    }
  };

  this.onMounted = () => {
    // console.log('onMounted');
  };

  this.onUnmounted = () => {
    // console.log('onUnmounted');
  };

  this.onUpdated = () => {
    // console.log('onUpdated');
  };

  this.onClick = (target: string, event: any) => {
    this.eventList[target] = { event: event, type: 'onClick' };
    const element = document.getElementById(target);
    if (element) {
      element.onclick = event;
    }
  };

  this.onStateBind = (pool: any) => {
    this.state = pool.state;
    pool.emitter.on(pool.name, () => {
      this.render();
    });
  };

  this.onEventBind = () => {
    Object.keys(this.eventList).map((key) => {
      const targetEvent = this.eventList[key];
      const element = document.getElementById(key);
      if (element && targetEvent.type === 'onClick') {
        element.onclick = targetEvent.event;
      }
    });
  };

  this.onStyle = (styles: styleObject) => {
    for (const property in styles) {
      if (styles.hasOwnProperty(property)) {
        this.element.style[property] = styles[property];
      }
    }
  };

  this.init();
}

export default function Owo($id: string, $parent: HTMLDivElement) {
  return new (Component as any)($id, $parent);
}
