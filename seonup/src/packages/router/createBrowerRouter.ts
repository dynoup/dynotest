import { Router } from './router.type';

export let routerPool: Router = [];

export default function createBrowserRouter(newRouter: Router) {
  // TODO: 정규표현식으로 해서 저장하기..
  routerPool = newRouter;
  return routerPool;
}
