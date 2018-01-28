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

describe('generator-rvm:styled', () => {
  it('works with argument', () => {
    return helpers.run(path.join(__dirname, '.'))
      .inTmpDir((dirname) => {
        fs.writeFileSync(path.join(dirname, 'package.json'), packageJSON);
      })
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
      .inTmpDir((dirname) => {
        fs.writeFileSync(path.join(dirname, 'package.json'), packageJSON);
      })
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
