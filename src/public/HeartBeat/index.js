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
    switch (data.status) {
      case "not-available":
        res.status = <Tag color="red">Not Available</Tag>;
        break;
      default:
        res.status = <Tag color="#40a9ff">Working</Tag>;
    }
  }

  return (
    <div>
      <span className="heart-beat-time" style={{color: "#1890ff"}}>
        最近心跳时间：{res.time}
      </span>
      <span className="heart-beat-status">设备状态： {res.status}</span>
    </div>
  );
};

export default function HeartBeat() {
  const [status, setStatus] = useState();

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

  return <div className="heartbeat-root">{status}</div>;
}
