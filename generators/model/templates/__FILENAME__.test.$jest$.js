import { expect } from 'chai';

import { <%= modelName %>, <%= modelName %>List } from './<%= fileName %>';

describe('Models/<%= modelName %>', () => {

  it('provides name', async () => {
    const record = new <%= modelName %>({ id: '1' });

    expect(record).to.be.instanceOf(<%= modelName %>);
    expect(record.name).to.equal('<%= modelName %> (1)');

    record.id = 2;
    expect(record.name).to.equal('<%= modelName %> (2)');
  });

});

describe('Models/<%= modelName %>List', () => {

  it('provides name', async () => {
    const records = new <%= modelName %>List({ id: '1' });

    expect(records).to.be.instanceOf(<%= modelName %>List);
    expect(records.name).to.equal('<%= modelName %>List (1)');

    records.id = 2;
    expect(records.name).to.equal('<%= modelName %>List (2)');
  });

});
