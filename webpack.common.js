const path = require('path');

module.exports = {
  entry: [
    './src/js/index.js'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
     {
       test: /\.(png|svg|jp(e?)g|gif)$/,
       use: [{
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'img/',
          publicPath: 'img/'
        }
       }]
     },
     {
       test: /\.(woff|woff2|ttf|otf|eot)$/,
       loader: 'url-loader?limit=100000'
     }
    ]
  }
};