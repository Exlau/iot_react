import actionTypes from "./authConsts";

const initState = {
  token: "",
  username: "",
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.SET_TOKEN:
      return {...initState, token: action.payload};
    default:
      return {...initState};
  }
};

export default authReducer;
