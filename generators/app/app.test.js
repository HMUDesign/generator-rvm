const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-rvm:app', () => {
  it('works with argument', () => {
    return helpers.run(path.join(__dirname, '.'))
      .withArguments([ 'my-app' ])
      .then(() => {
        assert.file([
          'my-app/package.json',
        ]);
      })
    ;
  });

  it('works with prompt', () => {
    return helpers.run(path.join(__dirname, '.'))
      .withPrompts({ name: 'my-app' })
      .then(() => {
        assert.file([
          'my-app/package.json',
        ]);
      })
    ;
  });
});
