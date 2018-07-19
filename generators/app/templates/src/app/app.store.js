import { Object as ObserveObject } from 'can-observe';

export default class Store extends ObserveObject {
  get name() {
    return `Ylem (${this.id})`;
  }
}
