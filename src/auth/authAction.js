import actionTypes from "./authConsts";

const setToken = (payload) => ({
  type: actionTypes.SET_TOKEN,
  payload,
});

module.exports = {
  setToken,
};
