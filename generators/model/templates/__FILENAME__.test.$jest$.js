import { expect } from 'chai';

import <%= modelName %> from './<%= fileName %>';

describe('Models/<%= modelName %>', () => {

  it('provides name', async () => {
    const record = new <%= modelName %>({ id: '1' });

    expect(record).to.be.instanceOf(<%= modelName %>);
    expect(record.name).to.equal('Ylem (1)');

    record.id = 2;
    expect(record.name).to.equal('Ylem (2)');
  });

});
