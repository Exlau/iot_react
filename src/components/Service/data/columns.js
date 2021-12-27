import {
  CheckCircleOutlined,
  SyncOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
  ClockCircleOutlined,
  MinusCircleOutlined,
} from "@ant-design/icons";

import {Tag, Button} from "antd";

import {SERVICE_STATE} from "./consts";

const Columns = () => [
  {
    title: "服务ID",
    dataIndex: "key",
    key: "key",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "服务名称",
    dataIndex: "service-name",
    key: "service-name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "参数列表",
    dataIndex: "params-list",
    key: "params-list",
    render: (text) => <a>{text}</a>,
  },

  {
    title: "状态",
    key: "state",
    dataIndex: "state",
    render: (tags) => {
      switch (tags) {
        case SERVICE_STATE.STABLE:
          return (
            <>
              <Tag icon={<CheckCircleOutlined />} color="success">
                {SERVICE_STATE.STABLE}
              </Tag>
            </>
          );
        default:
          return (
            <>
              <Tag icon={<MinusCircleOutlined />} color="default">
                UNKNOW
              </Tag>
            </>
          );
      }
    },
  },
  {
    title: "调用",
    key: "action",
    dataIndex: "action",
    render: ({text, callBack}) => (
      <Button type="link" onClick={callBack}>
        {text}
      </Button>
    ),
  },
];

export default Columns;
