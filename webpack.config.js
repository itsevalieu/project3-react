var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry: [
        './src/index.js'
    ],
    output: {
        path: path.join(__dirname, '/src/dist'),
        filename: 'bundle.js',
        publicPath: '/src/'
    },
    module: {
        loaders: [
            // js
            {
                test: /\.jsx?$/,
                loaders: ['babel-loader'],
                include: path.join(__dirname, 'src')
            },
            {
            test: /\.css$/,
            loaders: ['style-loader'],
            use: [
                { loader: "style-loader" },
                { loader: "css-loader" },
            ],
            include: path.join(__dirname, 'src')
            }
        ]
    }
};