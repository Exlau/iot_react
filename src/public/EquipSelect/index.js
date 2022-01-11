import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Select} from "antd";
import {getDeviceList} from "../../api/equipments";
import equipConsts from "../../components/Equipment/data/equipmentConsts";
import "./index.css";

const {Option} = Select;

export default function EquipSelect(props) {
  const dispatch = useDispatch();
  const deviceList = useSelector((state) => {
    // eslint-disable-next-line
    console.log(state);
    return state.equipmentReducer.equipmentList;
  });

  // const [deviceList, setDeviceList] = useState([]);

  useEffect(() => {
    // getDeviceList().then((res) => {
    //   const list = [];
    //   Object.keys(res.data.device_list).forEach((item) => {
    //     list.push(res.data.device_list[item]);
    //   });
    //   setDeviceList(list);
    // });
  }, []);

  const handleChange = (v) => {
    v = JSON.parse(v);
    dispatch({
      type: equipConsts.SET_AUTHORITY,
      payload: v.device_authority,
    });
    dispatch({
      type: equipConsts.SET_EQUIP,
      payload: v.device_name,
    });
  };

  return (
    <div className="device-select">
      <span className="current-device-text">当前设备: </span>
      <Select
        defaultValue={deviceList[0] ? deviceList[0].device_name : null}
        style={{width: 120}}
        onChange={handleChange}
      >
        {deviceList.map((item) => {
          return (
            <Option key={item.device_authority} value={JSON.stringify(item)}>
              {item.device_name}
            </Option>
          );
        })}
      </Select>
    </div>
  );
}
