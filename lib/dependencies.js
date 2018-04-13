function hasPackage(pkg, name) {
  const dependencies = pkg.dependencies || {};
  const devDependencies = pkg.devDependencies || {};

  return dependencies[name] || devDependencies[name];
}

module.exports = function getDependencies(pkg) {
  const documentjs = hasPackage(pkg, 'documentjs');
  const jest = hasPackage(pkg, 'jest') || hasPackage(pkg, 'react-scripts') || hasPackage(pkg, 'custom-react-scripts') || hasPackage(pkg, 'advanced-react-scripts');
  const less = hasPackage(pkg, 'less') || hasPackage(pkg, 'steal-less');
  const qunit = hasPackage(pkg, 'steal-qunit') || hasPackage(pkg, 'qunit');
  const router = hasPackage(pkg, 'react-router-dom');
  const steal = hasPackage(pkg, 'steal');
  const storybook = hasPackage(pkg, '@storybook/react');
  const styled = hasPackage(pkg, 'styled-components');

  return {
    documentjs,
    jest,
    less,
    qunit,
    router,
    steal,
    storybook,
    styled,

    test: jest || qunit,
    readme: documentjs || storybook,
  };
};
