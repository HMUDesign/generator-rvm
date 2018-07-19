import Store from './app.store';

describe('App/Store', () => {

  it('provides name', async () => {
    const store = new Store({ id: '1' });

    expect(store.name).toBe('Ylem (1)');

    store.id = 2;
    expect(store.name).toBe('Ylem (2)');
  });

});
