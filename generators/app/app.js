const Generator = require('yeoman-generator');
const yosay = require('yosay');
const getDependencies = require('../../lib/dependencies');
const getFiles = require('../../lib/files');

const allFiles = [
  { file: 'src/index.js' },
  { file: 'src/themes/index.js', requirements: [ 'styled' ] },
  { file: 'src/themes/primary.js', requirements: [ 'styled' ] },
  { file: 'src/app/README.md' },
  { file: 'src/app/index.js' },
  { file: 'src/app/app.component.js' },
  { file: 'src/app/app.component.stories.js', requirements: [ 'storybook' ] },
  { file: 'src/app/app.component.test.js', requirements: [ 'jest' ] },
  { file: 'src/app/app.styled.js', requirements: [ 'styled' ] },
  { file: 'src/app/app.styled.stories.js', requirements: [ 'styled', 'storybook' ] },
  { file: 'src/app/app.viewmodel.js' },
  { file: 'src/app/app.viewmodel.test.js', requirements: [ 'jest' ] },
];

module.exports = class extends Generator {
  writing() {
    if (!this.fs.exists(this.destinationPath('package.json'))) {
      console.log(yosay('The rvm:app generator can only be run on an existing project. package.json not found.')); // eslint-disable-line no-console
      process.exit(1);
    }

    const pkg = this.fs.readJSON(this.destinationPath('package.json'));

    const dependencies = getDependencies(pkg);
    const files = getFiles(dependencies, allFiles);

    for (const file of files) {
      this.fs.copyTpl(this.templatePath(file), this.destinationPath(file), {
        dependencies,
        storybook: this.config.get('storybook') || '@storybook/react',
      });
    }
  }

  installing() {
    this.npmInstall([
      'react-view-model@pre',
      'can-observation@pre',
      'can-observe@pre',
    ]);
  }
};
