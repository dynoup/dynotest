import Header from './components/Header/Header';
import Trend from './components/Trend/Trend';
import render from './core/render';
import useCoreComponent from './core/useCoreComponent';
import PostPage from './pages/post';
import { ComponentProps } from './types/core/component';

export default function App(props?: ComponentProps) {
  const coreComponentProps = useCoreComponent('App');

  return {
    ...coreComponentProps,
    render() {
      return `
        ${render(Header)}
        ${render(PostPage)}
        ${render(Trend)}
      `;
    },
  };
}
