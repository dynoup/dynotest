import Header from './components/Header/Header';
import Trend from './components/Trend/Trend';
import { ComponentProps } from './packages/core/component.type';
import render from './packages/core/render';
import useCoreComponent from './packages/core/useCoreComponent';
import { BrowserRouter, createBrowserRouter } from './packages/router';
import HomePage from './pages/home';
import PostPage from './pages/post';

export default function App(props?: ComponentProps) {
  const componentObject = useCoreComponent({
    component: App,
  });

  // TODO: BrowserRouter 하위 컴포넌트를 parent로 넘겨주는게 짜증남... 다른 방법 찾아보기...
  const BrowserRouterInstance = BrowserRouter({
    parent: componentObject,
  });
  const BrowserRouterObject = BrowserRouterInstance();

  const HeaderInstance = Header({ parent: BrowserRouterObject });
  const HomePageInstance = HomePage({ parent: BrowserRouterObject });
  const PostPageInstance1 = PostPage({
    parent: BrowserRouterObject,
  });
  const TrendInstance = Trend({ parent: BrowserRouterObject });

  createBrowserRouter([
    {
      path: '/',
      component: HomePageInstance,
    },
    {
      path: '/index.html',
      component: HomePageInstance,
    },
    {
      path: '/post',
      component: PostPageInstance1,
    },
    {
      path: '/trend',
      component: TrendInstance,
    },
  ]);

  componentObject.render = () => {
    return `
      ${render(HeaderInstance)}
      ${render(BrowserRouterInstance)}
    `;
  };

  return () => componentObject;
}
