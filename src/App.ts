import useCoreComponent from './core/useCoreComponent';
import { ComponentProps } from './types/component';

export default function App(props?: ComponentProps) {
  const coreComponentProps = useCoreComponent('App');

  return {
    ...coreComponentProps,
    render() {
      return `
        <div>
          <h1>Core2 App</h1>
        </div>
      `;
    },
  };
}
