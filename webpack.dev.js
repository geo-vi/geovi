const {merge} = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        static: path.join(__dirname, '/web/release'),
        compress: true,
        port: 3000,
    },
});
