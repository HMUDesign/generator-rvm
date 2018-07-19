import <%= componentName %>Store from './<%= fileName %>.store';

describe('<%= displayPrefix %>/<%= componentName %> Store', () => {

  it('provides name', async () => {
    const store = new <%= componentName %>Store({ id: '1' });

    expect(store).toBeInstanceOf(<%= componentName %>Store);
    expect(store.name).toBe('Ylem (1)');

    store.id = 2;
    expect(store.name).toBe('Ylem (2)');
  });

});
