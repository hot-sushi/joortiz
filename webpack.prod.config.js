const path = require('path');

const config = {
  mode: 'production',
  entry: {
    index: ['babel-polyfill', './src/index.js']
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }, {
        test: /\.(woff2|woff|ttf|svg|eot|cur)$/,
        loader: 'file-loader'
      }, {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }, {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }, {
        test: /\.(jpg|gif|png)$/,
        use: [
          {
            loader: 'url-loader'
          }
        ]
      }
    ]
  }
}

module.exports = config;
