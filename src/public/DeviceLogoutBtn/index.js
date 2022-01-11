import React from "react";
import {Button} from "antd";
import {deviceLogout, deviceOnline} from "../../api/equipments";

export default function DeviceLogoutBtn() {
  const handleClick = () => {
    deviceLogout()
      .then((res) => {
        // eslint-disable-next-line
        console.log(res.data);
      })
      .catch((err) => {
        // eslint-disable-next-line
        console.log(err);
      });
  };
  const handleClick2 = () => {
    deviceOnline()
      .then((res) => {
        // eslint-disable-next-line
        console.log(res.data);
      })
      .catch((err) => {
        // eslint-disable-next-line
        console.log(err);
      });
  };
  return (
    <div>
      <Button type="danger" onClick={handleClick}>
        设备下线
      </Button>
      <Button type="primary" onClick={handleClick2}>
        设备上线
      </Button>
    </div>
  );
}
