import path from "path";
import ReactRefreshPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import { Configuration } from "webpack";

const config: Configuration = {
  mode: "development", // 실제 서비스시에는 production
  devtool: "eval", // 실제 서비스시에는 hidden-source-map
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },

  //입력
  entry: {
    app: "./src/client",
  },

  //모듈 적용
  module: {
    rules: [
      {
        loader: "babel-loader",
        options: { plugins: ["react-refresh/babel"] },
      },

      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: path.join(__dirname, "node_modules"),
      },
      {
        test: /\.(png|jpg)$/,
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
