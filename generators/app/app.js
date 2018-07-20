const path = require('path');
const Generator = require('yeoman-generator');
const yosay = require('yosay');
const getDependencies = require('../../lib/dependencies');
const getFiles = require('../../lib/files');

const allFiles = [
  { file: 'src/index.js' },
  { file: 'src/theme.js', requirements: [ 'makeStyled' ] },
];

module.exports = class extends Generator {
  _getOutputFilename(fileName) {
    return [
      fileName
        .replace(/\.\$.+\$\./, '.')
      ,
    ].join('/');
  }

  initializing() {
    this.composeWith(require.resolve('../component'), {
      location: path.join(this.contextRoot, 'src'),
      fileName: 'app',
      component: true,
      viewmodel: true,
      styled: true,
    });
  }

  writing() {
    if (!this.fs.exists(this.destinationPath('package.json'))) {
      console.log(yosay('The ylem:app generator can only be run on an existing project. package.json not found.')); // eslint-disable-line no-console
      process.exit(1);
    }

    const pkg = this.fs.readJSON(this.destinationPath('package.json'));

    const dependencies = getDependencies(pkg);
    dependencies.makeView = true;
    dependencies.makeStore = true;
    dependencies.makeStyled = true;

    const files = getFiles(dependencies, allFiles);
    for (const source of files) {
      const target = this._getOutputFilename(source);

      this.fs.copyTpl(this.templatePath(source), this.destinationPath(target), {
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
