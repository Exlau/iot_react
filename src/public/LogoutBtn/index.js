import React from "react";
import {localUrl} from "../../api/config";
import Cookies from "js-cookie";
import locStorage from "../../utils/localStorage";
import {Button} from "antd";

export default function Logout() {
  const handleLogout = () => {
    Cookies.remove("token");
    locStorage.rm("username");
    window.location.href = `${localUrl}login`;
  };

  return (
    <Button type="text" danger onClick={handleLogout}>
      取消登录
    </Button>
  );
}
