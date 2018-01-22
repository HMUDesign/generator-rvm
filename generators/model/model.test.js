const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-rvm:model', () => {
  it('works with argument', () => {
    return helpers.run(path.join(__dirname, '.'))
      .withArguments([ 'foo-bar' ])
      .then(() => {
        assert.file([
          'src/models/foo-bar.js',
          'src/models/foo-bar.test.js',
        ]);
      })
    ;
  });

  it('works with prompt', () => {
    return helpers.run(path.join(__dirname, '.'))
      .withPrompts({ fileName: 'foo-bar' })
      .then(() => {
        assert.file([
          'src/models/foo-bar.js',
          'src/models/foo-bar.test.js',
        ]);
      })
    ;
  });
});
