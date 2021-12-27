import {combineReducers} from "redux";

import authReducer from "../auth/authReducer";

const reducers = combineReducers({
  authReducer: authReducer,
});

export default reducers;
