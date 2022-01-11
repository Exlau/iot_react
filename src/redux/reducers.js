import {combineReducers} from "redux";

import authReducer from "../auth/authReducer";
import equipmentReducer from "../components/Equipment/data/equipmentReducer";

const reducers = combineReducers({
  authReducer: authReducer,
  equipmentReducer: equipmentReducer,
});

export default reducers;
