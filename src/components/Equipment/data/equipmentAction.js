import actionTypes from "./equipmentConsts";

const setEquipment = (payload) => ({
  type: actionTypes.SET_EQUIP,
  payload,
});

const setAuthority = (payload) => ({
  type: actionTypes.SET_AUTHORITY,
  payload,
});

const setEquipmentList = (payload) => ({
  type: actionTypes.SET_EQUIPLIST,
  payload,
});

module.exports = {
  setEquipment,
  setAuthority,
  setEquipmentList,
};
