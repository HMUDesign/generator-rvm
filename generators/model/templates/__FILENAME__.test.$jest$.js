import <%= modelName %> from './<%= fileName %>';

describe('Models/<%= modelName %>', () => {

  it('provides name', async () => {
    const record = new <%= modelName %>({ id: '1' });

    expect(record).toBeInstanceOf(<%= modelName %>);
    expect(record.name).toBe('Ylem (1)');

    record.id = 2;
    expect(record.name).toBe('Ylem (2)');
  });

});
