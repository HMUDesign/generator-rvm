const Generator = require('yeoman-generator');
const { kebabCase } = require('lodash');
const askName = require('inquirer-npm-name');
const path = require('path');
const mkdirp = require('mkdirp');
const extend = require('deep-extend');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.config.defaults({
      storybook: '@storybook/react',
    });
  }

  initializing() {
    this.props = {};
  }

  prompting() {
    return askName({
      name: 'name',
      message: 'Your app name',
      default: kebabCase(path.basename(process.cwd())),
      filter: (name) => kebabCase(name),
    }, this).then(({ name }) => {
      this.props.name = name;
      this.props.storybook = this.config.get('storybook');
    });
  }

  default() {
    if (path.basename(this.destinationPath()) !== this.props.name) {
      mkdirp(this.props.name);
      this.destinationRoot(this.destinationPath(this.props.name));
    }

    this.composeWith(require.resolve('generator-node/generators/app'), {
      boilerplate: false,
      name: this.props.name,
      projectRoot: 'src',
      skipInstall: this.options.skipInstall,
    });
  }

  writing() {
    const pkg = this.fs.readJSON(this.destinationPath('package.json'), {});
    const appPkg = require('./templates/package.json');

    extend(pkg, {
      scripts: appPkg.scripts,
      dependencies: appPkg.dependencies,
      devDependencies: appPkg.devDependencies,
    });

    this.fs.copyTpl(this.templatePath(), this.destinationPath(), this.props);
    this.fs.copyTpl(this.templatePath('.storybook'), this.destinationPath('.storybook'), this.props);
    this.fs.copyTpl(this.templatePath('.env'), this.destinationPath('.env'), this.props);
    this.fs.copyTpl(this.templatePath('.eslintrc.yml'), this.destinationPath('.eslintrc.yml'), this.props);
    this.fs.writeJSON(this.destinationPath('package.json'), pkg);
  }

  conflicts() {
    const pkg = this.fs.readJSON(this.destinationPath('package.json'), {});

    delete pkg.devDependencies.jest;
    delete pkg.eslintConfig;
    delete pkg.jest;

    this.fs.writeJSON(this.destinationPath('package.json'), pkg);

    this.fs.append(this.destinationPath('.eslintignore'), 'build\n');
  }
};
