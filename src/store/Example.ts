import { observable } from 'mobx';

export class Example {
  @observable items: string[] = ['foo', 'bar'];
}
