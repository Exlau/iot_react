import React, {useState} from "react";
import {Form, Input, Button, notification, PageHeader} from "antd";

import {callService} from "../../../../api/services";
import serviceCb from "../../data/servicePresent";

const openNotification = (message, description) => {
  notification.open({
    message: message,
    description: description,
    onClick: () => {},
  });
};

export default function ModalForm({row}) {
  const [componentSize, setComponentSize] = useState("default");

  const onFormLayoutChange = ({size}) => {
    setComponentSize(size);
  };

  const onFinish = (val) => {
    const method_key = row.key || null;
    const method_name = row["service-name"] || null;
    callService(method_key)
      .then((res) => {
        serviceCb(method_name, res);
      })
      .catch((err) => {
        openNotification("失败了！", err);
      });
  };

  return (
    <div>
      <PageHeader
        className="modal-page-header"
        title={row["service-name"] || "unknown service"}
      />
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        onFinish={onFinish}
        size={componentSize}
      >
        {row["params-list"]
          ? row["params-list"].map((param) => {
              return (
                <Form.Item label={param} key={param} name={param}>
                  <Input />
                </Form.Item>
              );
            })
          : null}

        <Form.Item>
          <Button type="primary" htmlType="submit">
            submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
