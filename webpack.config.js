const path = require('path');

const webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  // devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader:'babel-loader',
          options: {
            // cacheDirectory: true,
            // presets: ['es2015',{ "modules": false }],
            // plugins: ['transform-runtime']
            // presets: [
            //   ["env"],
            // ],
            // // "plugins": ["transform-runtime"],
            // plugins: ["transform-decorators-legacy","transform-runtime"]
          }
        }
      }
    ]
  },
  plugins: [
      // new webpack.optimize.UglifyJsPlugin({
      //     compress: { warnings: false }
      // }),
  ],
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    publicPath: "/",
  },

};
