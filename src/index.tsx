import { enableLogging } from 'mobx-logger';
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './components/Root/Root';
import { createStore } from './store';

enableLogging({});

const store = createStore();
const dom = document.body.appendChild(document.createElement('div'));

const render = (Component) =>
  ReactDom.render(
    <AppContainer warnings={false}>
      <Component store={store} />
    </AppContainer>,
    dom,
  );

render(Root);

// tslint:disable:no-string-literal
if (module['hot']) {
  module['hot'].accept('./components/Root/Root', () => {
    const Next = require('./components/Root/Root').default;

    render(Next);
  });
}
