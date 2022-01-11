import React, {useEffect, useState} from "react";
import {heartBeat} from "../../api/apis";
import {Tag} from "antd";
import "./index.css";

const processData = (data) => {
  const res = {};
  if (data.time) {
    res.time = data.time;
  }
  if (data.class) {
    res.class = "heartbeat";
  }
  if (data.status) {
    const available = data.status === "avaliable";
    if (available) {
      // eslint-disable-next-line
      console.log("available is :", available);
      res.status = <Tag color="#40a9ff">Working</Tag>;
    } else {
      // eslint-disable-next-line
      console.log("available is :", available);
      res.status = <Tag color="red">Not Available</Tag>;
    }
  }
  return res;
};

export default function HeartBeat() {
  const [stat, setStatus] = useState({});

  useEffect(() => {
    heartBeat().then((res) => {
      try {
        setStatus(processData(res.data));
      } catch (e) {
        // eslint-disable-next-line
        console.log(e);
      }
    });
    const timer = setInterval(() => {
      heartBeat().then((res) => {
        try {
          // eslint-disable-next-line
          console.log("do process");
          setStatus(processData(res.data));
        } catch (e) {
          // eslint-disable-next-line
          console.log(e);
        }
      });
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="heartbeat-root">
      <div>
        <span className="heart-beat-time" style={{color: "#1890ff"}}>
          最近心跳时间：{stat.time}
        </span>
        <span className="heart-beat-status">设备状态： {stat.status}</span>
      </div>
    </div>
  );
}
