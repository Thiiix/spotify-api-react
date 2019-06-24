const path = require('path')
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
      '@js': resolve('src/javascripts'),
      '@css': resolve('src/styles'),
      '@images': resolve('src/images')
    }
  },
  devServer: {
    historyApiFallback: true,
    headers: {
       'Access-Control-Allow-Origin': '*'
     }
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
        test: /\.(scss|sass|css)$/,
        exclude: /node_modules/,
        loaders: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true,
              importLoaders: 1
            }
          },
        'sass-loader',
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        loader: 'svg-react-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('src/templates/index.html'),
      filename: 'index.html',
      vendorJs: externalAssets.js,
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    })
  ]
};
