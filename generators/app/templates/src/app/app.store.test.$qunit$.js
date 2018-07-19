import QUnit from '<%= dependencies.steal ? 'steal-qunit' : 'qunit' %>';

import AppStore from './app.store';

QUnit.module('App Store', () => {

  QUnit.test('provides name', (assert) => {
    const store = new AppStore({ id: '1' });

    assert.ok(store instanceof AppStore);
    assert.ok(store.name === 'Ylem (1)');

    store.id = 2;
    assert.ok(store.name === 'Ylem (2)');
  });

});
