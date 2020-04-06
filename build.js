const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

const config = {
  target: 'node',
  mode: 'production',
  output: {
    path: __dirname,
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      { test: /.js$/, exclude: /(node_modules)/, use: 'babel-loader' }
    ],
  },
  resolve: { extensions: ['.js'] },
}

const log = (err, stats) => {
  if (err) throw err;
  console.log(stats.toString({ colors: true }));
}

webpack({
  ...config,
  entry: path.join(__dirname, 'src', 'makeMarkdownCompiler.js'),
  output: {
    ...config.output,
    filename: 'index.js'
  },
  externals: [nodeExternals()],
}, log);

webpack({
  ...config,
  entry: path.join(__dirname, 'src', 'compiler.js'),
  output: {
    ...config.output,
    filename: 'extra.js'
  },
  externals: [nodeExternals()],
}, log);
