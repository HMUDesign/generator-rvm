const craConfig = require('custom-react-scripts/config/webpack.config.dev.js');

module.exports = storybookConfig => {
  const config = { ...craConfig };

  config.entry = storybookConfig.entry;
  config.output = storybookConfig.output;

  config.plugins = storybookConfig.plugins;
  for (const plugin of config.plugins) {
    if (plugin.constructor.name === 'HtmlWebpackPlugin') {
      plugin._getFullTemplatePath = plugin.getFullTemplatePath;
      plugin.getFullTemplatePath = function(...args) {
        return '!' + this._getFullTemplatePath(...args);
      };
    }
  }

  for (const rule of config.module.rules) {
    if (rule.oneOf) {
      rule.oneOf.splice(rule.oneOf.length - 1, 0, {
        test: /\.md$/,
        use: [
          {
            loader: 'html-loader',
          },
          {
            loader: 'markdown-loader',
          },
        ],
      });
    }
  }

  return config;
};
