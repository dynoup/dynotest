import { CurrentDoms } from '../types/component';

const currentDom: CurrentDoms = {};

export default function useCoreComponent(key: string) {
  return {
    ...useCurrentDom(key),
  };
}

function useCurrentDom(key: string) {
  const getCurrentDom = () => currentDom[key];

  const setCurrentDom = (newCurrentDom: string) => {
    currentDom[key] = newCurrentDom;
    return currentDom[key];
  };

  return { getCurrentDom, setCurrentDom };
}
