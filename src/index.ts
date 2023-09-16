import './style.css';
import { createRoot } from './core/Owo';
import Mainpage from './pages/main';
import ProfilePage from './pages/profile';
import StatePool from './core/StatePool';
import profileRepository from './statePool/profileRepository';
import LeftSideBarComponent from './components/sidebar/LeftSideBarComponent';

// create root node
const root = createRoot();

// Mainpage('__Mainpage', root);
LeftSideBarComponent('__LeftSiderBar', root);
export const OwoPool = StatePool(profileRepository());

ProfilePage('__Profile', root);
