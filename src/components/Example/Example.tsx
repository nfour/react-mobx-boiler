import { observer, Provider } from 'mobx-react';
import * as React from 'react';
import { Route, Router, withRouter } from 'react-router';
import { IStore } from '../../types';
import './Example.scss';

@observer
export default class Example extends React.Component<{ example: IStore['example']; }> {
  render () {
    const { example } = this.props;

    return <div className='example'>
      {example.items.map((item) => <div>Item: {item}</div>)}
    </div>;
  }
}
