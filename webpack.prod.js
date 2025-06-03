const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

const repoName = process.env.REPO_NAME || '';

module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: repoName ? `/${repoName}/` : '',
        clean: true,
        assetModuleFilename: 'images/[hash][ext][query]',
    }
});
