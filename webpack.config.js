const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'none',
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        // use: ['style-loader', 'css-loader']
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin,
    new HtmlWebpackPlugin({
      title: 'Webpack Plugin Sample',
      template: './src/index.html'
    }),
    // new HtmlWebpackPlugin({
    //   filename: 'about.html' // 多入口输出
    // }),
    new CopyWebpackPlugin([ // 将不需要打包的静态资源文件 拷贝到输出目录
      {
        from: './public',
        to: 'public'
      }
    ]),
    new MiniCssExtractPlugin({
      filename: '[name].css', // 默认以入口文件名命名
      chunkFilename: '[id].css',
      ignoreOrder: false
    })
  ]
}