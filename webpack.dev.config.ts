import path from "path";
import BaseConfig from "./webpack.default.config";
import { Configuration, HotModuleReplacementPlugin } from "webpack";

const config: Configuration = {
  mode: "development",
  entry: BaseConfig.entry,
  output: {
    publicPath: "/",
  },
  module: BaseConfig.module,
  resolve: BaseConfig.resolve,
  plugins: [
    new HotModuleReplacementPlugin(),
    ...(BaseConfig.plugins ? BaseConfig.plugins : [])
  ],
  devtool: "inline-source-map",
  devServer: {
    static: path.join(__dirname, "build"),
    historyApiFallback: true,
    port: 5000,
    open: true,
    hot: true,
    proxy: {
      '/api/v3': {
        target: 'http://localhost:5000',
        router: () => 'https://safetybell-connect-app.kongmeta.dev',
        secure: true,
        changeOrigin: true,
      },
      '/sub': {
        target: 'http://localhost:5000',
        router: (r) => {
          const url = r.url;
          const subdomain = url.split('/')[2];
          r.url = url.replace(/\/sub\/[\w-]+\//, '/');
          return `https://${subdomain}.kongmeta.dev`;
        },
        secure: true,
        changeOrigin: true
      }
    },
  },
};

export default config;