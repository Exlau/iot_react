import React, {useEffect, useState} from "react";
import HeatCharts from "../../charts/HeatCharts";

export default function Home() {
  const [heatData, setHeateData] = useState(10);

  useEffect(() => {
    const setdata = setInterval(() => {
      const timeNow = new Date();
      const heat = timeNow.getSeconds();
      setHeateData(heat);
    }, 1000);

    return () => {
      clearInterval(setdata);
    };
  }, []);

  return (
    <div>
      <HeatCharts size={300} data={heatData} />
    </div>
  );
}
