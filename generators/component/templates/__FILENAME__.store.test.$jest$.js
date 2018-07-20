import { expect } from 'chai';

import <%= componentName %>Store from './<%= fileName %>.store';

describe('<%= displayPrefix %>/<%= componentName %> Store', () => {

  it('provides name', async () => {
    const store = new <%= componentName %>Store({ id: '1' });

    expect(store).to.be.instanceOf(<%= componentName %>Store);
    expect(store.name).to.equal('<%= componentName %> (1)');

    store.id = 2;
    expect(store.name).to.equal('<%= componentName %> (2)');
  });

});
