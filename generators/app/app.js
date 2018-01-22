const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.argument('name', {
      desc: 'The name of the app to generate (eg: my-cool-app).',
      required: false,
      type: String,
    });

    this.config.defaults({
      storybook: '@storybook/react',
    });
  }

  prompting() {
    return this.prompt([
      this.options.name ? null : {
        type: 'input',
        name: 'name',
        message: 'Name: (eg: my-cool-app)',
        filter: input => input.trim(),
        validate: (input) => input ? true : 'You must provide a name.',
      },
    ].filter(Boolean)).then(({ name }) => {
      this.input = {
        name: this.options.name || name,
        storybook: this.config.get('storybook'),
      };
    });
  }

  writing() {
    if (this.fs.exists(`${this.input.name}/package.json`)) {
      throw new Error('There is already an app at this location.');
    }

    this.fs.copyTpl(this.templatePath(), this.destinationPath(this.input.name), this.input);
  }

  installing() {
    this.npmInstall();
  }
};
