const fs = require('fs');
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-ylem:component', () => {

  it('works with steal/qunit/less/documentjs', () => {
    return helpers.run(path.join(__dirname, '.'))
      .inTmpDir((dirname) => {
        fs.writeFileSync(path.join(dirname, 'package.json'), JSON.stringify({
          name: 'my-app',
          dependencies: {
            'documentjs': 'documentjs',
            'less': 'less',
            'qunit': 'qunit',
            'react-router-dom': 'react-router-dom',
            'steal': 'steal',
            'styled-components': 'styled-components',
          },
        }));
      })
      .withPrompts({ fileName: 'foo-bar' })
      .withOptions({
        component: true,
        store: true,
        styled: true,
      })
      .then(() => {
        assert.file([
          'src/components/foo-bar/foo-bar.less',
          'src/components/foo-bar/foo-bar.store.js',
          'src/components/foo-bar/foo-bar.store.test.js',
          'src/components/foo-bar/foo-bar.styled.js',
          'src/components/foo-bar/foo-bar.view.js',
          'src/components/foo-bar/foo-bar.view.test.js',
          'src/components/foo-bar/demo.html',
          'src/components/foo-bar/index.js',
          'src/components/foo-bar/README.md',
          'src/components/foo-bar/test.html',
          'src/components/foo-bar/test.js',
        ]);
      })
    ;
  });

  it('works with jest', () => {
    return helpers.run(path.join(__dirname, '.'))
      .inTmpDir((dirname) => {
        fs.writeFileSync(path.join(dirname, 'package.json'), JSON.stringify({
          name: 'my-app',
          dependencies: {
            'jest': 'jest',
            'react-router-dom': 'react-router-dom',
            'styled-components': 'styled-components',
          },
        }));
      })
      .withPrompts({ fileName: 'foo-bar' })
      .withOptions({
        component: true,
        store: true,
        styled: true,
      })
      .then(() => {
        assert.file([
          'src/components/foo-bar/foo-bar.store.js',
          'src/components/foo-bar/foo-bar.store.test.js',
          'src/components/foo-bar/foo-bar.styled.js',
          'src/components/foo-bar/foo-bar.view.js',
          'src/components/foo-bar/foo-bar.view.test.js',
          'src/components/foo-bar/README.md',
        ]);
      })
    ;
  });

});
