import { Object as ObserveObject } from 'can-observe';

export default class ViewModel extends ObserveObject {
  get name() {
    return `ReactViewModel (${this.id})`;
  }
}
