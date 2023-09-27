type Routes = {
  [path: string]: Route;
};

type Route = {
  name: string;
  element: any;
};

function Controller() {
  this.routes = {};
  this.targetRoute = {};
  this.currentURL = '';
  this.currentPath = '';
  this.innerHTML = '';
  this.targetElement;

  this.init = () => {
    window.addEventListener('popstate', () => {
      this.onRoute();
    });
  };

  this.setRoutes = (targetElement: any, Routes: Routes) => {
    this.targetElement = targetElement;
    this.routes = Routes;
    this.targetRoute = Routes['/'];
  };

  this.onRoute = () => {
    const { pathname } = location;
    this.targetRoute = this.routes[pathname];
    this.targetElement.innerHTML = '';
    this.targetRoute();
  };

  this.init();
}

export default function OwoRouter() {
  return new (Controller as any)();
}
