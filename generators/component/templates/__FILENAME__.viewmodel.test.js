<%- dependencies.jest ?
`import ${componentName}ViewModel from './${fileName}.viewmodel';

describe('${displayPrefix}/${componentName} ViewModel', () => {

  it('provides name', async () => {
    const viewModel = new ${componentName}ViewModel({ id: '1' });

    expect(viewModel.name).toBe('${componentName} (1)');

    viewModel.id = 2;
    expect(viewModel.name).toBe('${componentName} (2)');
  });

});
` : '' -%>
<%- dependencies.qunit ?
`import QUnit from '${dependencies.steal ? 'steal-qunit' : 'qunit'}';

import ${componentName}ViewModel from './${fileName}.viewmodel';

QUnit.module('${displayPrefix}/${componentName} ViewModel', () => {

  QUnit.test('works', (assert) => {
    const viewModel = new ${componentName}ViewModel({ id: '1' });

    assert.ok(viewModel instanceof ${componentName}ViewModel);
    assert.ok(viewModel.name === '${componentName} (1)');

    viewModel.id = 2;
    assert.ok(viewModel.name === '${componentName} (2)');
  });

});
` : '' -%>
