const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
entry: './src/index.js',
output: {
path: path.resolve(__dirname, 'dist'),
filename: 'bundle.[contenthash].js',
clean: true,
publicPath: '/',
},
module: {
rules: [
{
test: /\.jsx?$/,
exclude: /node_modules/,
use: {
loader: 'babel-loader'
}
},
{
test: /\.css$/,
use: ['style-loader', 'css-loader']
},
{
test: /\.(png|jpe?g|gif|svg)$/i,
type: 'asset/resource',
generator: { filename: 'assets/images/[name][ext]' }
}
]
},
resolve: { extensions: ['.js', '.jsx'] },
devServer: {
port: 3000,
historyApiFallback: true,
proxy: [
    {
      context: ["/api"],
      target: "http://localhost:8080",
    },
  ],
},
plugins: [
new HtmlWebpackPlugin({ template: './public/index.html' })
]
};