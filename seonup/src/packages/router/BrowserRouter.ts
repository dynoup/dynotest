import { ComponentProps } from '../core/component.type';
import render from '../core/render';
import useCoreComponent from '../core/useCoreComponent';
import { setEvents } from '../event/event';
import { routerPool } from './createBrowerRouter';

// TODO: router를 require props로 타입 지정...
export default function BrowserRouter(props?: ComponentProps) {
  const componentObject = useCoreComponent({
    component: BrowserRouter,
    parent: props?.parent,
  });

  function handleRoute() {
    if (!componentObject.router)
      throw new Error('router가 제공되지 않는 컴포넌트입니다.');
    render(componentObject.router);
  }

  setEvents([
    {
      componentKey: componentObject.key,
      selector: 'window',
      action: 'popstate',
      handler: handleRoute,
    },
  ]);

  componentObject.router = () => componentObject;
  componentObject.render = () => {
    return render(getRouterComponent());
  };

  return () => componentObject;
}

function getRouterComponent(path?: string) {
  // if (path === window.location.pathname) return; // TODO: 동일한 페이지로 이동하는 버튼을 클릭할 경우 무시한다.
  console.log('[routerPool]', routerPool);

  const targetRouter = routerPool.find(
    (router) => router.path === (path ?? window.location.pathname)
  );

  if (!targetRouter)
    throw new Error(
      `${path ?? window.location.pathname}는 없는 페이지 입니다.`
    );

  return targetRouter.component;
}
