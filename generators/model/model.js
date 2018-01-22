const Generator = require('yeoman-generator');
const { camelCase, upperFirst } = require('lodash');

const files = {
  model: '__FILENAME__.js',
  modelTest: '__FILENAME__.test.js',
};

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.argument('fileName', {
      desc: 'The name of the model to generate (eg: my-cool-model).',
      required: false,
      type: String,
    });
  }

  prompting() {
    return this.prompt([
      this.options.fileName ? null : {
        type: 'input',
        name: 'fileName',
        message: 'Name: (eg: my-cool-model)',
        filter: input => input.trim(),
        validate: (input) => input ? true : 'You must provide a name.',
      },
    ].filter(Boolean)).then(({ fileName, description }) => {
      fileName = this.options.fileName || fileName;

      this.input = {
        fileName: fileName,
        modelName: upperFirst(camelCase(fileName)),
      };
    });
  }

  _getOutputFilename(filename) {
    return [
      'src/models',
      filename.replace('__FILENAME__', this.input.fileName),
    ].join('/');
  }

  writing() {
    if ( this.fs.exists(this._getOutputFilename(files.model))
      || this.fs.exists(this._getOutputFilename(files.modelTest))) {
      throw new Error(`There is already a model called ${this.input.fileName}.`);
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
