import fixture from 'can-fixture';
import QueryLogic from 'can-query-logic';

const store = fixture.store([
  { id: 1, name: 'Do the dishes' },
  { id: 2, name: 'Walk the dog' },
], new QueryLogic({ identity: [ 'id' ] }));

fixture('/api/<%= fileName %>/{id}', store);
