import Header from './components/Header/Header';
import Trend from './components/Trend/Trend';
import render from './core/render';
import useCoreComponent from './core/useCoreComponent';
import HomePage from './pages/home';
import PostPage from './pages/post';
import BrowserRouter, { createBrowserRouter } from './router/router';
import { ComponentProps } from './types/core/component';
import { Router } from './types/router/router';

export default function App(props?: ComponentProps) {
  const coreComponentProps = useCoreComponent('App');

  const router = createBrowserRouter([
    {
      path: '/',
      component: HomePage,
    },
    {
      path: '/post',
      component: PostPage,
    },
    // {
    //   path: '/bookmarks',
    //   component: BookmarksPage,
    // },
    // {
    //   path: '/profile',
    //   component: ProfilePage,
    // },
  ]);

  return {
    ...coreComponentProps,
    render() {
      return `
        ${render(Header)}
        ${render(() => BrowserRouter({ router }))}
        ${render(PostPage)}
        ${render(Trend)}
      `;
    },
  };
}
