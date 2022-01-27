import * as React from "react";
import * as ReactDOM from "react-dom";
import HomeBarDic from "./homebardic";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <HomeBarDic />
  </Provider>,
  document.getElementById("root")
);
