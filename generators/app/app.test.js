const fs = require('fs');
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-ylem:app', () => {

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
      .then(() => {
        assert.file([
          'src/app/app.store.js',
          'src/app/app.store.test.js',
          'src/app/app.styled.js',
          'src/app/app.view.js',
          'src/app/app.view.test.js',
          'src/app/index.js',
          'src/app/README.md',
          'src/index.js',
          'src/theme.js',
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
      .then(() => {
        assert.file([
          'src/app/app.store.js',
          'src/app/app.store.test.js',
          'src/app/app.styled.js',
          'src/app/app.view.js',
          'src/app/app.view.test.js',
          'src/app/index.js',
          'src/app/README.md',
          'src/index.js',
          'src/theme.js',
        ]);
      })
    ;
  });

});
