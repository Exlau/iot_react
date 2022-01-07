import React, {useEffect, useState} from "react";
import {Descriptions, Badge} from "antd";
import locStorage from "../../utils/localStorage";
const errMsg = "Oops! Something went wrong please contact us";

export default function Profile() {
  const [appkey, setAppkey] = useState("NULL");
  const username = locStorage.get("username");
  useEffect(() => {
    // do get appkey from
    // TODO
    const pro = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("success!");
      }, 500);
    });
    pro.then((res) => {
      setAppkey(res);
    });
  }, []);
  const nowTime = new Date();
  const offset = nowTime.getTimezoneOffset() / 60;

  return (
    <div>
      <Descriptions title="个人信息" layout="vertical" bordered>
        <Descriptions.Item label="用户名">
          {username ? username : errMsg}
        </Descriptions.Item>
        <Descriptions.Item label="国家/地区">中国</Descriptions.Item>
        {/* <Descriptions.Item label="时区">Prepaid</Descriptions.Item> */}
        <Descriptions.Item label="appkey">{appkey}</Descriptions.Item>
        <Descriptions.Item label="时区">GMT{offset}</Descriptions.Item>
        <Descriptions.Item label="账号类型" span={2}>
          普通
        </Descriptions.Item>
        <Descriptions.Item label="账号状态" span={3}>
          <Badge status="processing" text="Availible" />
        </Descriptions.Item>
        <Descriptions.Item label="邮箱">285874446@qq.com</Descriptions.Item>
        <Descriptions.Item label="其他信息">
          Data disk type: MongoDB
          <br />
          Database version: 3.4
          <br />
          Package: dds.mongo.mid
          <br />
          Storage space: 10 GB
          <br />
          Replication factor: 3
          <br />
          Region: East China 1<br />
        </Descriptions.Item>
      </Descriptions>
    </div>
  );
}
