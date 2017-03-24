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
            }
        ],
        rules: [
            {
                test: /\.css$/,
                use: [ 
                    { loader: "style-loader" }, 
                    { loader: "css-loader" }
                ],
                include: path.join(__dirname, 'public')
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000
                }
            }
        ]
    }
};