import createHashHistory from 'history/createHashHistory';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import { Example } from './Example';

export interface IStore {
  example: Example;

  history: any;
  routing: RouterStore;
}

export const createStore = (): IStore => {
  const store = <IStore> {};

  const browserHistory = createHashHistory();

  store.example = new Example(store);
  store.routing = new RouterStore();
  store.history = syncHistoryWithStore(browserHistory, store.routing);

  return store;
};
