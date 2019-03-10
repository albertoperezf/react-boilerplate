import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

export function setBasenameAndReload(basename: string, route: string) {
  window.location = basename + route;
}

export default history;
