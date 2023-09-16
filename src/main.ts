import App from './App';
import createRoot from './core/createRoot';

const root = createRoot(document.querySelector('#app') as HTMLElement);
root.render(App);
