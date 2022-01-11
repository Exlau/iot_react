import actionTypes from "./equipmentConsts";

const initState = {
  currentEquipment: "",
  currentAuthority: "",
  equipmentList: [],
};

const equipmentReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.SET_EQUIP:
      return {...state, currentEquipment: action.payload};
    case actionTypes.SET_AUTHORITY:
      return {...state, currentAuthority: action.payload};
    case actionTypes.SET_EQUIPLIST:
      return {...state, equipmentList: action.payload};
    default:
      return {...initState};
  }
};

export default equipmentReducer;
