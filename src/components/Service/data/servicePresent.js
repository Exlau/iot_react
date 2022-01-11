import {notification} from "antd";
import {localUrl} from "../../../api/config";

const presentMap = {
  get_cpu_temp: {
    cb: function (res) {
      // eslint-disable-next-line
      console.log(res);
      const description = `cpu温度是： ${res.data.temp.res}`;
      // eslint-disable-next-line
      console.log(description);
      this.presentMethod("服务调用成功！", description);
    },
    presentMethod: (message, description) => {
      // eslint-disable-next-line
      console.log("present");
      notification.open({
        message: message,
        description: description,
        onClick: () => {},
      });
    },
  },
  monitor: {
    cb: function (res) {
      this.presentMethod();
    },
    presentMethod: () => {
      window.location.href = `${localUrl}stream?id=1&device_name=test`;
    },
  },
};

const serviceCb = (service, res) => {
  return presentMap[service].cb(res);
};

export default serviceCb;
