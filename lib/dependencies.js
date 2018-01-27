function hasPackage(pkg, name) {
  const dependencies = pkg.dependencies || {};
  const devDependencies = pkg.devDependencies || {};

  return dependencies[name] || devDependencies[name];
}

module.exports = function getDependencies(pkg) {
  return {
    router: hasPackage(pkg, 'react-router-dom'),
    storybook: hasPackage(pkg, '@storybook/react'),
    styled: hasPackage(pkg, 'styled-components'),
    jest: hasPackage(pkg, 'jest') || hasPackage(pkg, 'react-scripts') || hasPackage(pkg, 'custom-react-scripts'),
  };
};
