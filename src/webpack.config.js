
var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: path.join(__dirname, './'),
  mode: 'production',
  entry: ['./static/index.html', './index.js'],
  performance: {
    maxEntrypointSize: 5120000,
    maxAssetSize: 5120000
  },
  output: { 
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react','stage-3']
        }
      },
      {
        test: /\.html$/,
        loader: "file-loader?name=[name].[ext]",
      },
      {
        test: /\.css$/, 
        loader: "style-loader!css-loader" 
      },
      
      { 
        test: /\.png$/, 
        loader: "url-loader?limit=100000" 
      },
      { 
        test: /\.jpg$/, 
        loader: "file-loader" 
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  }
};