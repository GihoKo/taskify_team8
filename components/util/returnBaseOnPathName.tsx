import { ComponentListMappedToPath, ComponentMappedToPath } from './withFunnel';

const returnBasedOnPathNameImpl = (component: ComponentMappedToPath['component'], pathName: string) => {
  if (typeof component === 'function') {
    return <>{component(pathName)}</>;
  }

  return <>{component}</>;
};

export const returnBasedOnPathName = (
  componentListMappedToPath: ComponentListMappedToPath['componentListMappedToPath'],
  pathName: string,
) => {
  for (const { path, component } of componentListMappedToPath) {
    if (path instanceof RegExp) {
      if (path.test(pathName)) {
        return returnBasedOnPathNameImpl(component, pathName);
      }
    }

    if (Array.isArray(path)) {
      for (const p of path) {
        if (p === pathName) {
          return returnBasedOnPathNameImpl(component, pathName);
        }
      }
    }

    if (typeof path === 'string') {
      if (path === pathName) {
        return returnBasedOnPathNameImpl(component, pathName);
      }
    }
  }
};
