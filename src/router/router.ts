/**
 * [[[ router ]]]
 * - react router dom이랑 routes 동일하게 짜기
 * - routes에 작성된 path를 정규표현식으로 바꾸는 함수 getPathRegExp? 만들기 -> 아니면 getter로 path에 접근하면 정규표현식으로 검색?
 * - Link 컴포넌트 만들어서 to에 들어오는 값으로 path 검색해서 Routing: History API 사용
 * - 주소창에 입력했을 때는? 처음 렌더링될 때 pathname을 읽어올 순 없나?
 */

import useCoreComponent from '../core/useCoreComponent';
import { Router, BrowserRouterProps } from '../types/router/router';

let router: Router = [];

export default function BrowserRouter(props: BrowserRouterProps) {
  const coreComponentProps = useCoreComponent('Router');
  const { router } = props; 

  // TODO: router 받은걸로 어찌저찌 하기. 그러려면 일단 받은 router가 어떤 놈인지 만들어야 함

  return {
    ...coreComponentProps,
    render() {
      return `

      `;
    },
  };
}

export function createBrowserRouter(newRouter: Router) {
  router = [...router, ...newRouter];

  // route가 변경되면 리렌더링이 일어난다 (state와 동일한 맥락)
  // Route Context를 생성해야함? -> 전역으로 라우트를 쓸 수 있도록 하기.

  // return으로 뭘 줄까?....
}
