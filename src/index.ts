import './style.css';
import { createRoot } from './core/Owo';
import StatePool from './core/StatePool';
import OwoRouter from './core/Router';
import profileRepository from './statePool/profile/profileRepository';
import MainContent from './components/mainContent/MainContent';
import LeftSidebar from './components/sidebar/LeftSidebar/LeftSidebar';
import RightSidebar from './components/sidebar/RightSidebar';

// create root node
const root = createRoot();
export const statePool = StatePool(profileRepository());
export const Router = OwoRouter();

LeftSidebar('__LeftSiderbar', root);
MainContent('__MainContent', root);
RightSidebar('__RightSiderbar', root);
