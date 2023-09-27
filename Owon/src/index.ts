import './style.css';
import { createRoot } from './core/Owo';
import StatePool from './core/StatePool';
import OwoRouter from './core/Router';

import App from './App';
import LeftSidebar from './components/sidebar/LeftSidebar/LeftSidebar';
import RightSidebar from './components/sidebar/RightSidebar/RightSidebar';
import profileRepository from './statePool/profileRepository';
import feedRepository from './statePool/feedRepository';
import trendRepository from './statePool/trendRepository';

if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/browser');
  worker.start();
}

// create root node
const root = createRoot();

export const statePool = StatePool({
  profile: profileRepository(),
  feed: feedRepository(),
  trend: trendRepository(),
});

export const Router = OwoRouter();

LeftSidebar('__LeftSiderbar', root);
App('__App', root);
RightSidebar('__RightSiderbar', root);
