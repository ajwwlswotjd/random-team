import path from "path";
import { Configuration } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import ESLintPlugin from "eslint-webpack-plugin";

import FaviconsWebpackPlugin from 'favicons-webpack-plugin'

const BaseConfig: Configuration = {
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              publicPath: '/public/images/',
              outputPath: '/images/'
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(css)$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader", // translates CSS into CommonJS
          }
        ],
      },
      {
        test: /\.(styl)$/,
        use: [
          {
            loader: "style-loader", // creates style nodes from JS strings
          },
          {
            loader: "css-loader", // translates CSS into CommonJS
          },
          {
            loader: "stylus-loader", // compiles Stylus to CSS
          },
        ],
      },
      { 
        test: /\.(eot|glb|gltf)$/, 
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader'],
      },
    ],
  },
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@css': path.resolve(__dirname, './src/css'),
      '@redux': path.resolve(__dirname, './src/redux'),
      '@core': path.resolve(__dirname, './src/components/core'),
      '@plugins': path.resolve(__dirname, './src/plugins'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@api': path.resolve(__dirname, './src/api'),
    },
    extensions: [".tsx", ".ts", ".js"],
    fallback: {
      "fs": false,
      "tls": false,
      "net": false,
      "path": false,
      "zlib": false,
      "http": false,
      "https": false,
      "stream": false,
      "crypto": false,
      "tty": false,
      "url": false,
      "querystring": false,
      "util": false,
      "assert": false,
    } 
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      favicon: 'src/favicon.ico'
    }),
    // new FaviconsWebpackPlugin({
    //   logo: 'src/favicon.ico',
    //   manifest: 'src/site.webmanifest',
    // }),
    new ForkTsCheckerWebpackPlugin({
        async: false
    }),
    new ESLintPlugin({
        extensions: ["js", "jsx", "ts", "tsx"],
    })
  ]
};

export default BaseConfig;