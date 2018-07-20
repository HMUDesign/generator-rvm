const fs = require('fs');
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-ylem:model', () => {

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
      .then(() => {
        assert.file([
          'src/models/foo-bar.js',
          'src/models/foo-bar.test.js',
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
      .then(() => {
        assert.file([
          'src/models/foo-bar.js',
          'src/models/foo-bar.test.js',
        ]);
      })
    ;
  });

});
