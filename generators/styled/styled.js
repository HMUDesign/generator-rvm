const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.argument('fileName', {
      desc: 'The name of the component to generate (eg: my-cool-component).',
      required: false,
      type: String,
    });
  }

  initializing() {
    this.composeWith(require.resolve('../component'), {
      fileName: this.options.fileName,
      component: false,
      viewmodel: false,
      styled: true,
    });
  }
};
