const Generator = require('yeoman-generator');
const { camelCase, upperFirst } = require('lodash');
const getDependencies = require('../../lib/dependencies');
const getFiles = require('../../lib/files');

const allFiles = [
  { file: '__FILENAME__.component.js', requirements: [ 'makeComponent' ] },
  { file: '__FILENAME__.component.stories.js', requirements: [ 'makeComponent', 'storybook' ] },
  { file: '__FILENAME__.component.test.js', requirements: [ 'makeComponent', 'jest' ] },
  { file: '__FILENAME__.styled.js', requirements: [ 'makeStyled' ] },
  { file: '__FILENAME__.styled.stories.js', requirements: [ 'makeStyled', 'storybook' ] },
  { file: '__FILENAME__.viewmodel.js', requirements: [ 'makeViewModel' ] },
  { file: '__FILENAME__.viewmodel.test.js', requirements: [ 'makeViewModel', 'jest' ] },
  { file: 'README.md', requirements: [ 'storybook' ] },
  { file: 'index.js' },
];

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.argument('fileName', {
      desc: 'The name of the component to generate (eg: my-cool-component).',
      required: false,
      type: String,
    });

    this.option('component', {
      desc: 'Generate a React Component?',
      type: Boolean,
    });

    this.option('viewmodel', {
      desc: 'Generate a ViewModel?',
      type: Boolean,
    });

    this.option('styled', {
      desc: 'Generate a Styled component?',
      type: Boolean,
    });
  }

  prompting() {
    return this.prompt([
      this.options.fileName ? null : {
        type: 'input',
        name: 'fileName',
        message: 'Name: (eg: my-cool-component)',
        filter: input => input.trim(),
        validate: (input) => input ? true : 'You must provide a name.',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Description:',
        filter: input => input.trim(),
      },
      typeof this.options.component === 'boolean' ? null : {
        type: 'confirm',
        name: 'makeComponent',
        message: 'Generate a React component?',
        default: true,
      },
      typeof this.options.viewmodel === 'boolean' ? null : {
        type: 'confirm',
        name: 'makeViewModel',
        message: 'Generate a ViewModel?',
        default: true,
      },
      typeof this.options.styled === 'boolean' ? null : {
        type: 'confirm',
        name: 'makeStyled',
        message: 'Generate a Styled component?',
        default: true,
      },
    ].filter(Boolean)).then(({ fileName, description, makeComponent, makeViewModel, makeStyled }) => {

      fileName = this.options.fileName || fileName;
      const location = this.contextRoot.replace(this.destinationRoot(), '').slice(1);

      this.input = {
        fileName: fileName,
        componentName: upperFirst(camelCase(fileName)),
        description,
        makeComponent: typeof this.options.component === 'boolean' ? this.options.component : makeComponent,
        makeViewModel: typeof this.options.viewmodel === 'boolean' ? this.options.viewmodel : makeViewModel,
        makeStyled: typeof this.options.styled === 'boolean' ? this.options.styled : makeStyled,

        storybook: this.config.get('storybook') || '@storybook/react',
        pathPrefix: location || 'src/components',
        displayPrefix: location
          ? location.replace('src/', '').split('/').map(upperFirst).join('/')
          : 'Components'
        ,
      };
    });
  }

  _getOutputFilename(filename) {
    return [
      this.input.pathPrefix,
      this.input.fileName,
      filename.replace('__FILENAME__', this.input.fileName),
    ].join('/');
  }

  writing() {
    const pkg = this.fs.readJSON(this.destinationPath('package.json'), {});

    const dependencies = getDependencies(pkg);
    dependencies.makeComponent = this.input.makeComponent;
    dependencies.makeViewModel = this.input.makeViewModel;
    dependencies.makeStyled = this.input.makeStyled;

    const files = getFiles(dependencies, allFiles);
    for (const source of files) {
      const target = this._getOutputFilename(source);

      if (this.fs.exists(target)) {
        continue;
      }

      this.fs.copyTpl(this.templatePath(source), this.destinationPath(target), this.input);
    }
  }
};
