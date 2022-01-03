import React, {useEffect, useState} from "react";
import HeatCharts from "../../charts/HeatCharts";
import serviceList from "./config/serviceList";

export default function Home() {
  const [heatData, setHeateData] = useState(10);
  const [fresh, setFresh] = useState(0);

  useEffect(() => {
    const setdata = setInterval(() => {
      serviceList.forEach((service) => {
        service.dataRefresh();

        // 触发render
        setFresh((pre) => {
          return !pre;
        });
      });
    }, 1000);

    return () => {
      clearInterval(setdata);
    };
  }, []);

  return (
    <div>
      <HeatCharts size={300} data={heatData} />
      {serviceList.map((service) => {
        return <div key={service.serviceName}>{service.presentMethod()}</div>;
      })}
    </div>
  );
}
