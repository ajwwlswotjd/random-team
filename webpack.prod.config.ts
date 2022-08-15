import path from "path";
import BaseConfig from "./webpack.default.config";
import { Configuration } from "webpack";
import { CleanWebpackPlugin } from "clean-webpack-plugin";

const config: Configuration = {
  mode: "production",
  entry: BaseConfig.entry,
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    publicPath: "",
  },
  module: BaseConfig.module,
  resolve: BaseConfig.resolve,
  plugins: [
    new CleanWebpackPlugin(),
    ...(BaseConfig.plugins ? BaseConfig.plugins : [])
  ]
};

export default config;