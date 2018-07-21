function hasPackage(pkg, name) {
  const dependencies = pkg.dependencies || {};
  const devDependencies = pkg.devDependencies || {};

  return dependencies[name] || devDependencies[name];
}

module.exports = function getDependencies(pkg) {
  const canRestModel = hasPackage(pkg, 'can-rest-model');
  const canFixture = hasPackage(pkg, 'can-fixture');
  const documentjs = hasPackage(pkg, 'documentjs');
  const jest = hasPackage(pkg, 'jest') || hasPackage(pkg, 'react-scripts');
  const less = hasPackage(pkg, 'less') || hasPackage(pkg, 'steal-less');
  const qunit = hasPackage(pkg, 'steal-qunit') || hasPackage(pkg, 'qunit');
  const router = hasPackage(pkg, 'react-router-dom');
  const steal = hasPackage(pkg, 'steal');
  const styled = hasPackage(pkg, 'styled-components');

  return {
    canRestModel,
    canFixture,
    documentjs,
    jest,
    less,
    qunit,
    router,
    steal,
    styled,
  };
};
