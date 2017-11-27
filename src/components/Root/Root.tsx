import { observer, Provider } from 'mobx-react';
import * as React from 'react';
import { Route, Router, withRouter } from 'react-router';
import { IStore } from '../../types';
import './Root.scss';

@(withRouter as any)
@observer
class Root extends React.Component<{}> {
  store: IStore;

  constructor (props) {
    super(props);

    this.store = props.store; // For HMR
  }

  render () {
    return (
      <div className='root'>
        <Route exact path='/' component={Example} />
      </div>
    );
  }
}

@observer
export default class RootWrapper extends React.Component<{
  store: IStore;
}> {
  render () {
    const { store } = this.props;

    return (
      <Provider {...store}>
        <Router history={store.history}>
          <Root {...this.props} />
        </Router>
      </Provider>
    );

  }
}
