module.exports = function getFiles(dependencies, files) {
  return files
    .filter(({ requirements = [] }) => requirements.every(requirement => dependencies[requirement]))
    .map(({ file }) => file)
  ;
};
