import React, {useState} from "react";
import {Form, Input, Tooltip, Button, Space} from "antd";
import {getAppkey} from "../../api/equipments";
import {regesterDevice} from "../../api/equipments";

export default function Equipment() {
  const [appkeyValue, setAppkeyValue] = useState("");
  const onFinish = (values) => {
    values.appkey = appkeyValue;
    regesterDevice(values).then((res) => {
      // eslint-disable-next-line
      console.log(res.data);
    });
  };

  const onGetAppkey = () => {
    getAppkey()
      .then((res) => {
        setAppkeyValue(res.data.appkey);
      })
      .catch((err) => {
        alert("Error Occure when get Appkey");
      });
  };

  return (
    <div>
      <Space style={{marginLeft: "38px", marginBottom: "20px"}}>
        {/* <Form.Item
              name="appkey"
              noStyle
              rules={[{required: true, message: "AppKey is required"}]}
        ></Form.Item> */}
        AppKey :
        <Input
          onChange={(e) => {
            setAppkeyValue(e.target.value);
          }}
          value={appkeyValue}
          style={{width: 160}}
          placeholder="Please input"
        />
        <Tooltip title="click for appkey">
          <Button type="text" style={{color: "#40a9ff"}} onClick={onGetAppkey}>
            get appkey
          </Button>
        </Tooltip>
      </Space>

      <Form
        name="complex-form"
        onFinish={onFinish}
        labelCol={{span: 2}}
        wrapperCol={{span: 16}}
      >
        {/* <Form.Item label="AppKey"></Form.Item> */}
        <Form.Item label="Device Name">
          <Form.Item
            name="device_name"
            noStyle
            rules={[{required: true, message: "Device Name is required"}]}
          >
            {/* <Select placeholder="Select province">
              <Option value="Zhejiang">Zhejiang</Option>
              <Option value="Jiangsu">Jiangsu</Option>
            </Select> */}

            <Input style={{width: "50%"}} placeholder="Input device name" />
          </Form.Item>
        </Form.Item>
        <Form.Item label="Username">
          <Form.Item
            name="user_name"
            noStyle
            rules={[{required: true, message: "Device Name is required"}]}
          >
            <Input style={{width: "50%"}} placeholder="Input device name" />
          </Form.Item>
        </Form.Item>
        <Form.Item label=" " colon={false}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
