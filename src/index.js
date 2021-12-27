import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import Store from "./redux/store";
import App from "./App";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

ReactDOM.render(
  <Provider store={Store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
