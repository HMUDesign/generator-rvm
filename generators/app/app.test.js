const path = require('path');
const fs = require('fs');
const helpers = require('yeoman-test');

describe('generator-rvm:app', () => {
  it('works', () => {
    return helpers.run(path.join(__dirname, '.'))
      .withPrompts({
        name: 'my-rvm-app',
        description: 'An RVM app.',
        homepage: 'https://hmudesign.github.io/generator-rvm',
        githubAccount: 'hmudesign',
        authorName: 'Christopher Baker',
        authorEmail: 'christopher@hmudesign.com',
        authorUrl: 'https://www.hmudesign.com/',
        keywords: [],
        license: 'MIT',
      })
      .then(() => {
        const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));

        expect(pkg).toHaveProperty('name', 'my-rvm-app');
        expect(pkg).not.toHaveProperty('jest');
      })
    ;
  });
});
