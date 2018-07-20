import QUnit from '<%= dependencies.steal ? "steal-qunit" : "qunit" %>';

import <%= componentName %>Store from './<%= fileName %>.store';

QUnit.module('<%= displayPrefix %>/<%= componentName %> Store', () => {

  QUnit.test('provides name', (assert) => {
    const store = new <%= componentName %>Store({ id: '1' });

    assert.ok(store instanceof <%= componentName %>Store);
    assert.ok(store.name === 'Ylem (1)');

    store.id = 2;
    assert.ok(store.name === 'Ylem (2)');
  });

});
