import { Object as ObserveObject } from 'can-observe';

export default class <%= modelName %> extends ObserveObject {
  get name() {
    return `Ylem (${this.id})`;
  }
}
