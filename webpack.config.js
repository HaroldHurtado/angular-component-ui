var path = require('path');

module.exports = {
    entry: path.join(__dirname, 'src','library.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'library.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                query: {
                    presets: ['es2015']
                }
            },
            {
               test: /\.ts$/, loader: 'babel',
               loader: "babel-loader",
               query: {
                   presets: ['es2015']
               }
            },
            {
              test: /\.css$/,
              loader: 'style!css'
            }
        ]
    }
}
