import { Object as ObserveObject } from 'can-observe';

export class <%= modelName %> extends ObserveObject {
  get name() {
    return `<%= modelName %> (${this.id})`;
  }
}

export class <%= modelName %>List extends ObserveObject {
  get name() {
    return `<%= modelName %>List (${this.id})`;
  }
}
