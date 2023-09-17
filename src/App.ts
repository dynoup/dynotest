import Header from './components/Header/Header';
import Trend from './components/Trend/Trend';
import render from './core/render';
import useCoreComponent from './core/useCoreComponent';
import PostPage from './pages/post';
import { ComponentProps } from './types/core/component';

export default function App(props?: ComponentProps) {
  const componentObject = useCoreComponent({ component: App });

  const HeaderInstance = Header();
  const PostPageInstance1 = PostPage();
  const PostPageInstance2 = PostPage();
  const TrendInstance = Trend();

  // const router = createBrowserRouter([
  //   {
  //     path: '/',
  //     component: HomePage,
  //   },
  //   {
  //     path: '/post',
  //     component: PostPage,
  //   },
  //   // {
  //   //   path: '/bookmarks',
  //   //   component: BookmarksPage,
  //   // },
  //   // {
  //   //   path: '/profile',
  //   //   component: ProfilePage,
  //   // },
  // ]);

  componentObject.render = () => {
    return `
      ${render(HeaderInstance)}
      ${render(PostPageInstance1)}
      ${render(PostPageInstance2)}
      ${render(TrendInstance)}
    `;
  };

  return () => componentObject;
}
