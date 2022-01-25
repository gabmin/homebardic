const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development", // 실제 서비스시에는 production
  devtool: "eval", // 실제 서비스시에는 hidden-source-map
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },

  //입력
  entry: {
    app: "./scr/client",
  },

  //모듈 적용
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader",
      },
    ],
  },
  plugins: [],

  //출력
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "dist"),
  },
};
