import HeatCharts from "../../../charts/HeatCharts";
import {callService} from "../../../api/services";
import openNotification from "../../../public/Notice";

const serviceList = [
  {
    method_name: "get_cpu_temp",
    method_key: "1",
    presentMethod: function () {
      return <HeatCharts size={300} data={this.data} />;
    },
    dataRefresh: function () {
      callService(this.method_key).then((res) => {
        this.data = res.data.temp.res.toFixed(2);
        if (res.data.temp.res.toFixed(2) > 25) {
          openNotification({
            message: "警告",
            description: "温度已超过25度",
          });
        }
      });
    },
    data: 100,
  },
];

export default serviceList;
