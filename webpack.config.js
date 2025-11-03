const path = require('path');

module.exports = {
  mode:
    process.env.VITE_APP_ENV === 'production' ? 'production' : 'development',

  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },

  // ✅ CSP-safe devtool
  devtool:
    process.env.VITE_APP_ENV === 'production'
      ? 'source-map'
      : 'cheap-module-source-map',

  devServer: {
    static: './dist',
    hot: true,
  },
};
