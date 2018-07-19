const Generator = require('yeoman-generator');
const { camelCase, upperFirst } = require('lodash');
const getDependencies = require('../../lib/dependencies');
const getFiles = require('../../lib/files');

const allFiles = [
  { file: '__FILENAME__.less', requirements: [ 'less' ] },
  { file: '__FILENAME__.store.js', requirements: [ 'makeStore' ] },
  { file: '__FILENAME__.store.test.$jest$.js', requirements: [ 'makeStore', 'jest' ] },
  { file: '__FILENAME__.store.test.$qunit$.js', requirements: [ 'makeStore', 'qunit' ] },
  { file: '__FILENAME__.styled.js', requirements: [ 'makeStyled', 'styled' ] },
  { file: '__FILENAME__.view.js', requirements: [ 'makeView' ] },
  { file: '__FILENAME__.view.test.$jest$.js', requirements: [ 'makeView', 'jest' ] },
  { file: '__FILENAME__.view.test.$qunit$.js', requirements: [ 'makeView', 'qunit' ] },
  { file: 'demo.html', requirements: [ 'steal' ] },
  { file: 'index.connected.js' },
  { file: 'index.plain.js' },
  { file: 'index.styled.js' },
  { file: 'README.documentjs.md', requirements: [ 'readme' ] },
  { file: 'README.plain.md', requirements: [ 'readme' ] },
  { file: 'test.html', requirements: [ 'steal', 'qunit' ] },
  { file: 'test.js', requirements: [ 'steal', 'qunit' ] },
];

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.argument('fileName', {
      desc: 'The name of the component to generate (eg: my-cool-component).',
      required: false,
      type: String,
    });

    this.option('description', {
      desc: 'Specify a description',
      type: String,
    });

    this.option('view', {
      desc: 'Generate a View',
      type: Boolean,
    });

    this.option('store', {
      desc: 'Generate a Store',
      type: Boolean,
    });

    this.option('styled', {
      desc: 'Generate a Styled component',
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
      this.options.description === 'false' ? null : {
        type: 'input',
        name: 'description',
        message: 'Description:',
        filter: input => input.trim(),
      },
      typeof this.options.view === 'boolean' ? null : {
        type: 'confirm',
        name: 'makeView',
        message: 'Generate a View?',
        default: true,
      },
      typeof this.options.store === 'boolean' ? null : {
        type: 'confirm',
        name: 'makeStore',
        message: 'Generate a Store?',
        default: true,
      },
      typeof this.options.styled === 'boolean' ? null : {
        type: 'confirm',
        name: 'makeStyled',
        message: 'Generate a Styled component?',
        default: true,
      },
    ].filter(Boolean)).then(({ fileName, description, makeView, makeStore, makeStyled }) => {
      fileName = this.options.fileName || fileName;
      const location = this.contextRoot.replace(this.destinationRoot(), '').slice(1);

      this.input = {
        fileName: fileName,
        componentName: upperFirst(camelCase(fileName)),
        description,
        makeView: typeof this.options.view === 'boolean' ? this.options.view : makeView,
        makeStore: typeof this.options.store === 'boolean' ? this.options.store : makeStore,
        makeStyled: typeof this.options.styled === 'boolean' ? this.options.styled : makeStyled,

        renderDemo: this.config.get('render-demo'),
        renderTest: this.config.get('render-test'),

        pathPrefix: location || 'src/components',
        displayPrefix: location
          ? location.replace('src/', '').split('/').map(upperFirst).join('/')
          : 'Components'
        ,
      };
    });
  }

  _getOutputFilename(fileName) {
    return [
      this.input.pathPrefix,
      this.input.fileName,
      fileName
        .replace('__FILENAME__', this.input.fileName)
        .replace(/\.\$.+\$\./, '.')
      ,
    ].join('/');
  }

  writing() {
    const pkg = this.fs.readJSON(this.destinationPath('package.json'), {});
    const app = pkg.name;

    const dependencies = getDependencies(pkg);
    dependencies.makeView = this.input.makeView;
    dependencies.makeStore = this.input.makeStore;
    dependencies.makeStyled = this.input.makeStyled;

    const data = Object.assign({
      app,
      dependencies,
    }, this.input);

    const files = getFiles(dependencies, allFiles);
    for (const source of files) {
      const target = this._getOutputFilename(source);

      if (this.fs.exists(target)) {
        continue;
      }

      this.fs.copyTpl(this.templatePath(source), this.destinationPath(target), data);
    }
  }
};
