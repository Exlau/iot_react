import {createStore, compose} from "redux";
import reducers from "./reducers";

const Store = createStore(
  reducers,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default Store;
