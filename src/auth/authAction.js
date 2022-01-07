import actionTypes from "./authConsts";

const setToken = (payload) => ({
  type: actionTypes.SET_TOKEN,
  payload,
});

const setUsername = (payload) => ({
  type: actionTypes.SET_USERNAME,
  payload,
});

module.exports = {
  setToken,
  setUsername,
};
