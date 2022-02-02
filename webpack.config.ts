import path from "path";
import ReactRefreshPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ReactRefreshTypeScript from "react-refresh-typescript";
import { Configuration } from "webpack";
require("dotenv").config();

const isDevelopment = process.env.NODE_ENV !== "production";
console.log(process.env.NODE_ENV);

const config: Configuration = {
  mode: isDevelopment ? "development" : "production", // 개발시에는 development, 실제 서비스시에는 production
  devtool: isDevelopment ? "eval" : "source-map", // 개발시에는 eval, 실제 서비스시에는 hidden-source-map

  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },

  //입력
  entry: {
    app: "./src/client.tsx",
  },

  //모듈 적용
  module: {
    rules: [
      {
        loader: require.resolve("babel-loader"),
        options: {
          presets: [
            "@babel/preset-typescript",
            "@babel/preset-env",
            "@babel/preset-react",
          ],
          plugins: [
            isDevelopment && require.resolve("react-refresh/babel"),
          ].filter(Boolean),
        },
        exclude: /node_modules/,
      },

      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: path.join(__dirname, "node_modules"),
        options: {
          getCustomTransformers: () => ({
            before: [isDevelopment && ReactRefreshTypeScript()].filter(Boolean),
          }),
          transpileOnly: isDevelopment,
        },
      },
      {
        test: /\.(png|jpg)$/,
        exclude: [/node_modules/],
        use: ["file-loader"],
      },
    ],
  },
  plugins: [new ReactRefreshPlugin(), new ForkTsCheckerWebpackPlugin()],

  //출력
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "dist"),
    publicPath: "/dist",
  },
  devServer: {
    // publicPath: "/dist/",
    hot: true,
  },
};

export default config;
