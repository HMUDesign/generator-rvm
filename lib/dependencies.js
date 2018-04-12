function hasPackage(pkg, name) {
  const dependencies = pkg.dependencies || {};
  const devDependencies = pkg.devDependencies || {};

  return dependencies[name] || devDependencies[name];
}

module.exports = function getDependencies(pkg) {
  const jest = hasPackage(pkg, 'jest') || hasPackage(pkg, 'react-scripts') || hasPackage(pkg, 'custom-react-scripts') || hasPackage(pkg, 'advanced-react-scripts');
  const qunit = hasPackage(pkg, 'steal-qunit') || hasPackage(pkg, 'qunit');

  return {
    router: hasPackage(pkg, 'react-router-dom'),
    storybook: hasPackage(pkg, '@storybook/react'),
    styled: hasPackage(pkg, 'styled-components'),
    less: hasPackage(pkg, 'less') || hasPackage(pkg, 'steal-less'),
    steal: hasPackage(pkg, 'steal'),
    documentjs: hasPackage(pkg, 'documentjs'),
    jest,
    qunit,
    test: jest || qunit,
  };
};
