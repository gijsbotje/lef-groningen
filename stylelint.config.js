const plugins = [
  'jsx',
  'objectRestSpread',
  ['decorators', { decoratorsBeforeExport: true }],
  'classProperties',
  'classPrivateProperties',
  'classPrivateMethods',
  'exportExtensions',
  'asyncGenerators',
  'functionBind',
  'functionSent',
  'dynamicImport',
  'optionalCatchBinding',
  'optionalChaining',
];

module.exports = {
  processors: [['stylelint-processor-styled-components', { parserPlugins: plugins }]],
  extends: ['stylelint-config-recommended', 'stylelint-config-styled-components'],
};
