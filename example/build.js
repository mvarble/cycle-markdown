const path = require('path');
const webpack = require('webpack');

webpack(
  {
    mode: 'development',
    entry: path.join(__dirname, 'src.js'),
    output: {
      path: __dirname,
      filename: 'bundle.js',
    },
    module: {
      rules: [
        { test: /.js$/, exclude: /(node_modules)/, use: 'babel-loader' },
        { test: /.md$/, exclude: /(node_modules)/, use: 'raw-loader' },
      ],
    },
    resolve: { extensions: ['.js'] },
  },
  (err, stats) => {
    if (err) throw err;
    console.log(stats.toString({ colors: true }));
    console.log(`Open browser at file://${path.join(__dirname, 'index.html')}`);
  }
);
