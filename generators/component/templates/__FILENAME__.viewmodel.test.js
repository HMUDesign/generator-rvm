import ViewModel from './<%= fileName %>.viewmodel';

describe('<%= displayPrefix %>/<%= componentName %>/ViewModel', () => {

  it('provides name', async () => {
    const viewModel = new ViewModel({ id: '1' });

    expect(viewModel.name).toBe('ReactViewModel (1)');
  });

});
