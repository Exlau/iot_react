import {notification} from "antd";
import {localUrl} from "../../../api/config";

const presentMap = {
  get_cpu_temp: {
    cb: function (res) {
      const description = `cpu温度是： ${res.data.temp.res}`;
      this.presentMethod("服务调用成功！", description);
    },
    presentMethod: (message, description) => {
      notification.open({
        message: message,
        description: description,
        onClick: () => {},
      });
    },
  },
  "hashMap[hash][0]": {
    cb: function (res) {
      this.presentMethod();
    },
    presentMethod: () => {
      window.location.href = `${localUrl}stream/?id=1&name=dssd`;
    },
  },
};

const serviceCb = (service, res) => {
  return presentMap[service].cb(res);
};

export default serviceCb;
