const commonPaths = require("./path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack")
module.exports = {
  mode: "development",
  output: {
    filename: "[name].js",
    path: commonPaths.outputPath,
    publicPath: "/",
    chunkFilename: "chunk.[name].js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template/index.html",
      // favicon: commonPaths.faviconPath,
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.PUBLIC_URL': JSON.stringify(process.env.PUBLIC_URL),
    })
  ],
  devServer: {
    historyApiFallback: true,
    compress: true,
    hot: true,
    port: 3000,
  },
};
