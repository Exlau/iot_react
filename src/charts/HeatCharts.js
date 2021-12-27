import {React, useRef, useEffect} from "react";
import * as eCharts from "echarts";
let myChart;
const HeatCharts = ({size, data}) => {
  const chartRef = useRef();

  useEffect(() => {
    if (myChart !== null && myChart !== undefined && myChart !== "") {
    } else {
      myChart = eCharts.init(chartRef.current);
    }
    return () => {
      myChart.dispose();
      myChart = "";
    };
  }, []);

  useEffect(() => {
    const option = {
      series: [
        {
          type: "gauge",
          center: ["50%", "60%"],
          startAngle: 200,
          endAngle: -20,
          min: 0,
          max: 60,
          splitNumber: 12,
          itemStyle: {
            color: "#FFAB91",
          },
          progress: {
            show: true,
            width: size / 15,
          },
          pointer: {
            show: true,
            width: size / 60,
          },
          axisLine: {
            lineStyle: {
              width: size / 3.5,
            },
          },
          axisTick: {
            distance: -(size / 6.6),
            splitNumber: 5,
            lineStyle: {
              width: size / 150,
              color: "#999",
            },
          },
          splitLine: {
            distance: -(size / 5.7),
            length: size / 21.4,
            lineStyle: {
              width: size / 100,
              color: "#999",
            },
          },
          axisLabel: {
            distance: size / 5,
            color: "#999",
            fontSize: size / 25,
          },
          anchor: {
            show: false,
          },
          title: {
            show: false,
          },
          detail: {
            valueAnimation: true,
            width: "90%",
            lineHeight: size / 8,
            borderRadius: 8,
            offsetCenter: [0, "-15%"],
            fontSize: size / 12.5,
            fontWeight: "bolder",
            formatter: "{value} °C",
            color: "auto",
          },
          data: [
            {
              value: data,
            },
          ],
        },
        //   {
        //     type: "gauge",
        //     center: ["50%", "60%"],
        //     startAngle: 200,
        //     endAngle: -20,
        //     min: 0,
        //     max: 60,
        //     itemStyle: {
        //       color: "#FD7347",
        //     },
        //     progress: {
        //       show: true,
        //       width: 8,
        //     },
        //     pointer: {
        //       show: false,
        //     },
        //     axisLine: {
        //       show: false,
        //     },
        //     axisTick: {
        //       show: false,
        //     },
        //     splitLine: {
        //       show: false,
        //     },
        //     axisLabel: {
        //       show: false,
        //     },
        //     detail: {
        //       show: false,
        //     },
        //     data: [
        //       {
        //         value: data,
        //       },
        //     ],
        //   },
      ],
    };
    myChart.setOption(option);
  }, [data, size]);

  return (
    <div
      ref={chartRef}
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    ></div>
  );
};

export default HeatCharts;
