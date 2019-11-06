var path = require('path');

var webpack = require('webpack');

var packageData = require('./package.json');

var filename = [packageData.name, packageData.version, 'js'];

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, 'app/app.js'),
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: packageData.name + '.' + packageData.version + '.js',
        publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules)/,
          loader: 'babel-loader',
          query: {
			      presets: ['@babel/preset-env', '@babel/react']
          }
        }
      ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
      historyApiFallback: true 
    }
}