const fs = require('fs');
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

const packageJSON = JSON.stringify({
  dependencies: {
    'react-router-dom': 'react-router-dom',
    '@storybook/react': '@storybook/react',
    'styled-components': 'styled-components',
    'jest': 'jest',
  },
});

describe('generator-rvm:model', () => {
  it('works with argument', () => {
    return helpers.run(path.join(__dirname, '.'))
      .inTmpDir((dirname) => {
        fs.writeFileSync(path.join(dirname, 'package.json'), packageJSON);
      })
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
      .inTmpDir((dirname) => {
        fs.writeFileSync(path.join(dirname, 'package.json'), packageJSON);
      })
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
