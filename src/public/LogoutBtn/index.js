import React from "react";
import {localUrl} from "../../api/config";
import Cookies from "js-cookie";
import {Button} from "antd";

export default function Logout() {
  const handleLogout = () => {
    Cookies.remove("token");
    window.location.href = `${localUrl}login`;
  };

  return (
    <Button type="text" danger onClick={handleLogout}>
      Log Out
    </Button>
  );
}
