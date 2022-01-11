import React, {useEffect, useState} from "react";
import serviceList from "./config/serviceList";

export default function Home() {
  // eslint-disable-next-line
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
      {serviceList.map((service) => {
        return <div key={service.serviceName}>{service.presentMethod()}</div>;
      })}
    </div>
  );
}
