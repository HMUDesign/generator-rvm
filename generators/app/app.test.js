const path = require('path');
const helpers = require('yeoman-test');

describe('generator-rvm:app', () => {
  it('works', () => {
    helpers.run(path.join(__dirname, '.'));
  });
});
