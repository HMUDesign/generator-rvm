const Generator = require('yeoman-generator');
const yosay = require('yosay');
const getDependencies = require('../../lib/dependencies');
const getFiles = require('../../lib/files');

const allFiles = [
  { file: 'src/index.js' },
  { file: 'src/theme.js', requirements: [ 'styled' ] },
  { file: 'src/app/README.md' },
  { file: 'src/app/index.js' },
  { file: 'src/app/app.view.js' },
  { file: 'src/app/app.view.test.jest.js', requirements: [ 'jest' ] },
  { file: 'src/app/app.view.test.qunit.js', requirements: [ 'qunit' ] },
  { file: 'src/app/app.styled.js', requirements: [ 'styled' ] },
  { file: 'src/app/app.store.js' },
  { file: 'src/app/app.store.test.jest.js', requirements: [ 'jest' ] },
  { file: 'src/app/app.store.test.qunit.js', requirements: [ 'qunit' ] },
];

module.exports = class extends Generator {
  writing() {
    if (!this.fs.exists(this.destinationPath('package.json'))) {
      console.log(yosay('The ylem:app generator can only be run on an existing project. package.json not found.')); // eslint-disable-line no-console
      process.exit(1);
    }

    const pkg = this.fs.readJSON(this.destinationPath('package.json'));

    const dependencies = getDependencies(pkg);
    const files = getFiles(dependencies, allFiles);

    for (const file of files) {
      this.fs.copyTpl(this.templatePath(file), this.destinationPath(file), {
        dependencies,
      });
    }
  }

  installing() {
    this.npmInstall([
      'ylem',
    ]);
  }
};
