import { ComponentInstance } from '../core/component.type';
import render from '../core/render';

export default function useNavigate(componentInstance: ComponentInstance) {
  const instance = componentInstance();

  function navigate(path: string | number, options?: { replace?: boolean }) {
    if (!instance.router)
      throw new Error('router가 제공되지 않는 컴포넌트입니다.');

    if (typeof path === 'string') {
      // path로 이동
      if (options?.replace) window.history.replaceState({}, '', path);
      else window.history.pushState({}, '', path);
    } else if (typeof path === 'number') {
      // history 이동
      if (path === -1) history.back();
      else if (path === 1) history.forward();
    }

    render(instance.router);
  }

  return navigate;
}
