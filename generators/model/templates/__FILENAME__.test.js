import <%= modelName %> from './<%= fileName %>';

describe('Models/<%= modelName %>', () => {

  it('works', async () => {
    const record = new <%= modelName %>({

    });

    expect(record).toBeInstanceOf(<%= modelName %>);
  });

});
