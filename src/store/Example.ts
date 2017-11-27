import { observable } from 'mobx';
import { IStore } from './';

export class Example {
  @observable items: string[];

  constructor (private store: IStore) {
    this.store = store;
  }

}
