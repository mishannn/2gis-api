const path = require('path');

const filename = '2gis-api.js';

module.exports = {
  mode: 'production',
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          failOnError: false,
          emitWarning: true,
        },
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  entry: './src/Client.ts',
  externals: {
    axios: {
      commonjs: 'axios',
      commonjs2: 'axios',
      amd: 'axios',
      root: 'axios',
    },
  },
  output: {
    filename,
    sourceMapFilename: filename + '.map',
    path: path.resolve(__dirname, 'dist'),
    globalObject: "typeof self !== 'undefined' ? self : this",
    libraryTarget: 'umd',
    // libraryExport: 'Client',
    library: 'DGApi',
  },
  node: {
    process: false,
  },
};
