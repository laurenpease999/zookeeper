var path = require('path');

var webpack = require('webpack');

var packageData = require('./package.json');

var filename = [packageData.name, packageData.version, 'js'];

module.exports = {
    entry: './js/app.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: packageData.name + '.' + packageData.version + '.js',
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
    }
}