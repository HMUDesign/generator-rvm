const Generator = require('yeoman-generator');
const { camelCase, upperFirst } = require('lodash');

const files = {
  styled: '__FILENAME__.styled.js',
  styledStories: '__FILENAME__.styled.stories.js',
  index: 'index.js',
  readme: 'README.md',
};

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.argument('fileName', {
      desc: 'The name of the component to generate (eg: my-cool-component).',
      required: false,
      type: String,
    });

    this.config.defaults({
      storybook: '@storybook/react',
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
    ].filter(Boolean)).then(({ fileName, description }) => {
      fileName = this.options.fileName || fileName;

      const location = this.contextRoot.replace(this.destinationRoot(), '').slice(1);

      this.input = {
        fileName: fileName,
        componentName: upperFirst(camelCase(fileName)),
        description,
        storybook: this.config.get('storybook'),
        pathPrefix: location || 'src/components',
        displayPrefix: location
          ? location.replace('/src/', '').split('/').map(upperFirst).join('/')
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
    if (this.fs.exists(this._getOutputFilename(files.styled))) {
      throw new Error(`There is already a styled component called ${this.input.fileName}.`);
    }

    for (const file in files) {
      const source = files[file];
      const target = this._getOutputFilename(source);

      if (this.fs.exists(target)) {
        continue;
      }

      this.fs.copyTpl(this.templatePath(source), this.destinationPath(target), this.input);
    }
  }
};
