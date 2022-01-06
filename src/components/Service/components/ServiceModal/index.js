import React, {useState, useEffect} from "react";
import {Modal} from "antd";

export default function ServiceModal({visible, visibleCb, Cpn}) {
  const [isModalVisible, setIsModalVisible] = useState(visible);

  useEffect(() => {
    setIsModalVisible(visible);
  }, [visible]);

  const handleOk = () => {
    setIsModalVisible(false);
    visibleCb(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    visibleCb(false);
  };

  return (
    <Modal
      title="服务调用"
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      {Cpn}
    </Modal>
  );
}
