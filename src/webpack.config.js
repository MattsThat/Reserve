
var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: path.join(__dirname, './'),
  mode: 'development',
  entry: ['./static/index.html', './routes.js'],
  performance: {
    maxEntrypointSize: 5120000,
    maxAssetSize: 5120000
  },
  output: { 
//    path: path.join(__dirname, 'dist'),
    path: path.join(__dirname, 'src', 'static', 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        //test: /.js?$/,
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: { babelrcRoots: ['.', '../'] }, // <-- this line fixed it!
        /*query: {
          presets: ['@babel/react']
        }*/
      },
      /*{
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
            presets: ['react']
        }
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass!sass-resources'
      },*/
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
        //test: /\.jpg$/, 
        //loader: "file-loader" 
        test: /\.(jpg|png|gif|svg|pdf|ico)$/,
        use: [
          {
              loader: 'file-loader',
              options: {
                  name: '[path][name]-[hash:8].[ext]'
                },
          },
        ]
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  }
};