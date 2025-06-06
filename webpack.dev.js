const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
            watch: true,
        },
        open: false,
        hot: true,
        watchFiles: ['src/**/*'],
    },
});