import { inject, observer } from 'mobx-react';
import * as React from 'react';
import { IStore } from '../../types';
import './Example.scss';

@observer
@inject('example')
export default class Example extends React.Component<{ example: IStore['example']; }> {
  render () {
    const { example } = this.props;

    return <div className='example'>
      {example.items.map((item, i) => <div key={i}>Item: {item}</div>)}
    </div>;
  }
}
