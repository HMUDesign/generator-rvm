import QUnit from '<%= dependencies.steal ? 'steal-qunit' : 'qunit' %>';

import { <%= modelName %>, <%= modelName %>List } from './<%= fileName %>';

QUnit.module('Models/<%= modelName %>', () => {

  QUnit.test('provides name', (assert) => {
    const record = new <%= modelName %>({ id: '1' });

    assert.ok(record instanceof <%= modelName %>);
    assert.ok(record.name === 'Ylem (1)');

    record.id = 2;
    assert.ok(record.name === 'Ylem (2)');
  });

});

QUnit.module('Models/<%= modelName %>List', () => {

  QUnit.test('provides name', (assert) => {
    const records = new <%= modelName %>List({ id: '1' });

    assert.ok(records instanceof <%= modelName %>List);
    assert.ok(records.name === 'Ylem (1)');

    records.id = 2;
    assert.ok(records.name === 'Ylem (2)');
  });

});
