var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: path.join(__dirname, 'app'),
  mode: 'production',
  entry: {
    javascript: './app.js',
    html: './index.html'
  },
  output: { 
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  
  
  module: {
    rules: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.html$/,
        loader: "file-loader?name=[name].[ext]",
        //loader: "file-loader",
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
  },
  resolve:
  {  
    extensions: ['*', '.js', '.jsx']
  },
};