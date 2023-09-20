import App from './App';
import createRoot from './packages/core/createRoot';

const root = createRoot(document.querySelector('#app') as HTMLElement);
root.render(App);
