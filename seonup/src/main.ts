import App from './App';
import createRoot from './packages/core/createRoot';

if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/browser');
  worker.start();
}

const root = createRoot(document.querySelector('#app') as HTMLElement);
root.render(App);
