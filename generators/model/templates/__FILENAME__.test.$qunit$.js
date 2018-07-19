import QUnit from '<%= dependencies.steal ? 'steal-qunit' : 'qunit' %>';

import <%= modelName %> from './<%= fileName %>';

QUnit.module('Models/<%= modelName %>', () => {

  QUnit.test('provides name', (assert) => {
    const record = new <%= modelName %>({ id: '1' });

    assert.ok(record instanceof <%= modelName %>);
    assert.ok(record.name === 'Ylem (1)');

    record.id = 2;
    assert.ok(record.name === 'Ylem (2)');
  });

});
