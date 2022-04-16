const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: ['babel-polyfill', './index.web.js'],
  output: {
    path: path.resolve(__dirname, './web/release'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './web/index.html',
    }),
    new webpack.DefinePlugin({
      process: {env: {}},
    }),
    new CopyPlugin({
      patterns: [{from: 'web/ext', to: 'ext'}],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules\/(?!react-native-reanimated)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              {
                plugins: ['@babel/plugin-proposal-class-properties'],
              },
            ],
            plugins: ['babel-plugin-react-native-web'],
          },
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        include: [
          path.resolve(__dirname, 'node_modules/react-native-vector-icons'),
          path.resolve(__dirname, 'src/assets/font'),
        ],
      },
    ],
  },
  resolve: {
    alias: {
      'react-native$': 'react-native-web',
      'styled-components': 'styled-components/native',
    },
    extensions: ['.web.tsx', '.web.js', '.js', '.jsx', '.ts', '.tsx'],
  },
};
