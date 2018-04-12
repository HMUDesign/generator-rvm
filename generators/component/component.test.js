const fs = require('fs');
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

const packageJSON = JSON.stringify({
  name: 'my-app',
  dependencies: {
    'react-router-dom': 'react-router-dom',
    '@storybook/react': '@storybook/react',
    'styled-components': 'styled-components',
    'jest': 'jest',
    'less': 'less',
    'steal': 'steal',
    'documentjs': 'documentjs',
  },
});

describe('generator-rvm:component', () => {
  it('works with argument', () => {
    return helpers.run(path.join(__dirname, '.'))
      .inTmpDir((dirname) => {
        fs.writeFileSync(path.join(dirname, 'package.json'), packageJSON);
      })
      .withArguments([ 'foo-bar' ])
      .withOptions({
        component: true,
        viewmodel: true,
        styled: true,
      })
      .then(() => {
        assert.file([
          'src/components/foo-bar/foo-bar.component.js',
          'src/components/foo-bar/foo-bar.component.stories.js',
          'src/components/foo-bar/foo-bar.component.test.js',
          'src/components/foo-bar/foo-bar.html',
          'src/components/foo-bar/foo-bar.less',
          'src/components/foo-bar/foo-bar.md',
          'src/components/foo-bar/foo-bar.styled.js',
          'src/components/foo-bar/foo-bar.styled.stories.js',
          'src/components/foo-bar/foo-bar.viewmodel.js',
          'src/components/foo-bar/foo-bar.viewmodel.test.js',
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
      .withOptions({
        component: true,
        viewmodel: true,
        styled: true,
      })
      .then(() => {
        assert.file([
          'src/components/foo-bar/foo-bar.component.js',
          'src/components/foo-bar/foo-bar.component.stories.js',
          'src/components/foo-bar/foo-bar.component.test.js',
          'src/components/foo-bar/foo-bar.html',
          'src/components/foo-bar/foo-bar.less',
          'src/components/foo-bar/foo-bar.md',
          'src/components/foo-bar/foo-bar.styled.js',
          'src/components/foo-bar/foo-bar.styled.stories.js',
          'src/components/foo-bar/foo-bar.viewmodel.js',
          'src/components/foo-bar/foo-bar.viewmodel.test.js',
          'src/components/foo-bar/index.js',
          'src/components/foo-bar/README.md',
        ]);
      })
    ;
  });
});
