const path = require('path')
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin')

const externalAssets = {
  js: []
}

const resolve = dir => {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  resolve: {
    extensions: ['.js'],
    alias: {
      '@': resolve('src/javascripts')
    }
  },
  devServer: {
    historyApiFallback: true
  },
  entry: {
    app: [
      '@babel/polyfill',
      resolve('src/javascripts/index.js')
    ]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('src/templates/index.html'),
      filename: 'index.html',
      vendorJs: externalAssets.js,
    })
  ]
};
