const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-rvm:component', () => {
  it('works with argument', () => {
    return helpers.run(path.join(__dirname, '.'))
      .withArguments([ 'foo-bar' ])
      .then(() => {
        assert.file([
          'src/components/foo-bar/foo-bar.styled.js',
          'src/components/foo-bar/foo-bar.styled.stories.js',
          'src/components/foo-bar/index.js',
          'src/components/foo-bar/README.md',
        ]);
      })
    ;
  });

  it('works with prompt', () => {
    return helpers.run(path.join(__dirname, '.'))
      .withPrompts({ fileName: 'foo-bar' })
      .then(() => {
        assert.file([
          'src/components/foo-bar/foo-bar.styled.js',
          'src/components/foo-bar/foo-bar.styled.stories.js',
          'src/components/foo-bar/index.js',
          'src/components/foo-bar/README.md',
        ]);
      })
    ;
  });
});
