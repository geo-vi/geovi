const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: ['babel-polyfill', './index.web.js'],
    output: {
        path: path.resolve(__dirname, './release'),
        filename: 'bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
        }),
        new webpack.DefinePlugin({
            process: { env: {} }
        })
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
                                plugins: [
                                    '@babel/plugin-proposal-class-properties'
                                ]
                            }
                        ],
                        plugins: ['babel-plugin-react-native-web'],
                    },
                },
            },
        ],
    },
    resolve: {
        alias: {
            'react-native$': 'react-native-web',
            'styled-components': 'styled-components/native',
        },
        extensions: ['.web.js', '.js', '.jsx', '.ts', '.tsx'],
    },
};
