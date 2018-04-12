<%- dependencies.jest ?
`import ViewModel from './${fileName}.viewmodel';

describe('${displayPrefix}/${componentName}/ViewModel', () => {

  it('provides name', async () => {
    const viewModel = new ViewModel({ id: '1' });

    expect(viewModel.name).toBe('ReactViewModel (1)');

    viewModel.id = 2;
    expect(viewModel.name).toBe('ReactViewModel (2)');
  });

});
` : '' -%>
<%- dependencies.qunit ?
`import QUnit from '${dependencies.steal ? 'steal-qunit' : 'qunit'}';

import ViewModel from './${fileName}.viewmodel';

QUnit.module('${displayPrefix}/${componentName}/ViewModel');

QUnit.test('works', () => {
  const viewModel = new ViewModel({ id: '1' });

  QUnit.ok(vm instanceof ViewModel);
  QUnit.ok(viewModel.name === 'ReactViewModel (1)');

  viewModel.id = 2;
  QUnit.ok(viewModel.name === 'ReactViewModel (2)');
});
` : '' -%>
