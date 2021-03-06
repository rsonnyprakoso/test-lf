var webpack = require('webpack');

module.exports = {
    debug: true,
    entry: './app/main.js',
    module: {
        loaders: [
          { test: /\.js?$/, exclude: /node_modules/, loader: 'babel' },
          { test: /\.css$/, loader: "style-loader!css-loader" },
          { test: /\.png$/, loader: "url-loader?limit=100000" },
          { test: /\.jpg$/, loader: "file-loader" },
          { test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
          { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
          { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
          { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,  loader: 'url?limit=10000&mimetype=image/svg+xml' }
        ]
    },
    output: {
        path: './app',
        filename: 'index.js',
        publicPath: '/'
    },
    devServer: {
        historyApiFallback: {
            index: 'index.html'
        },
        contentBase: "./app",
        inline: true,
	    host: '0.0.0.0',
        port: 80
    }
};
