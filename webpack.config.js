const { join } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const htmlConfig = new HtmlWebpackPlugin({
  title: 'Web App 2020',
  template: './index.ejs'
})

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      components: join(__dirname, 'src/components'),
      containers: join(__dirname, 'src/containers')
    }
  },
  plugins: [htmlConfig],
  devtool: 'inline-source-map'
}
