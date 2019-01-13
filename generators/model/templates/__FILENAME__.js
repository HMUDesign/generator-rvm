<%- dependencies.canFixture ? `import './fixtures/${fileName}';\n` : '' -%>
import { ObserveObject } from 'ylem';
<%- dependencies.canRestModel ? `import canRestModel from 'can-rest-model';\n` : '' -%>

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
<%- dependencies.canRestModel ? `
canRestModel({
  Map: ${modelName},
  List: ${modelName}List,
  url: '/api/${fileName}/{id}',
});
` : '' -%>
