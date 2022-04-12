const { override, addBabelPlugin, addWebpackAlias } = require('customize-cra');
const path = require('path');
const { NODE_ENV: env } = process.env;
const configType = env === 'production' ? env : 'development';

const babelConfig = {
  development: {
    'babel-plugin-styled-components': {
      displayName: true,
    },
  },
  production: {
    'babel-plugin-styled-components': {
      displayName: false,
    },
  },
};

const config = babelConfig[configType];

module.exports = override(
  addBabelPlugin(
    ['babel-plugin-styled-components'],
    config['babel-plugin-styled-components']
  ),
  // fixBabelImports('import', {
  //   libraryName: 'antd',
  //   libraryDirectory: 'es',
  //   style: true,
  // }),

  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
  })
);
