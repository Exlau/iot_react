import React, {useEffect, useState} from "react";
import {
  Layout,
  Breadcrumb,
  PageHeader,
  Menu,
  Dropdown,
  Button,
  Tag,
  Typography,
  Row,
  Spin,
  Alert,
} from "antd";
import {EllipsisOutlined} from "@ant-design/icons";
import "./index.css";
// import flv from "flv.js";
import openNotification from "../../public/Notice";

const {Paragraph} = Typography;

let src = require("./video2.mp4");
const {Header, Content, Footer} = Layout;

class Card extends React.Component {
  state = {loading: true};

  toggle = (value) => {
    this.setState({loading: value});
  };

  render() {
    const container = (
      <Alert
        message="正在建立连接"
        description="这可能需要一会时间。。。"
        type="info"
      />
    );
    return (
      <div>
        <Spin spinning={this.state.loading} delay={500}>
          {container}
        </Spin>
      </div>
    );
  }
}

const menu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.alipay.com/"
      >
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.taobao.com/"
      >
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);

const DropdownMenu = () => (
  <Dropdown key="more" overlay={menu}>
    <Button
      style={{
        border: "none",
        padding: 0,
      }}
    >
      <EllipsisOutlined
        style={{
          fontSize: 20,
          verticalAlign: "top",
        }}
      />
    </Button>
  </Dropdown>
);

const IconLink = ({src, text}) => (
  <a className="example-link">
    <img className="example-link-icon" src={src} alt={text} />
    {text}
  </a>
);

const content = (
  <>
    <Paragraph>视频监控提供随时可查看的家庭摄像头功能</Paragraph>
    <Paragraph>如果遇到问题可以联系我们：</Paragraph>
    <Paragraph>邮箱: 285874446@qq.com</Paragraph>
    <Paragraph>电话: 18982453122</Paragraph>
    <div>
      <IconLink
        src="https://gw.alipayobjects.com/zos/rmsportal/NbuDUAuBlIApFuDvWiND.svg"
        text="由于设备限制，画面与现实有10秒左右延迟"
      />
    </div>
  </>
);

const Contents = ({children, extraContent}) => (
  <Row>
    <div style={{flex: 1}}>{children}</div>
    <div className="image">{extraContent}</div>
  </Row>
);

export default function Stream() {
  const [shutDown, setShutdown] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [canRecognize, setCanRecognize] = useState(false);
  const searchObj = {};
  window.location.search
    .slice(1)
    .split("&")
    .forEach((item) => {
      const itemArr = item.split("=");
      searchObj[itemArr[0]] = itemArr[1];
    });
  const subTitle = searchObj.device_name;
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 10000);
    setTimeout(() => {
      setCanRecognize(true);
    }, 35000);
  }, []);

  return (
    <div>
      <Layout className="layout">
        <Header>
          <div className="stream-logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
          ></Menu>
        </Header>
        <Content style={{padding: "0 50px"}}>
          <Breadcrumb style={{margin: "16px 0"}}>
            <Breadcrumb.Item>监控流</Breadcrumb.Item>
          </Breadcrumb>
          <div className="stream-layout-content">
            <PageHeader
              title="视频监控"
              className="site-page-header"
              subTitle={`Device Name: ${subTitle}`}
              tags={<Tag color="blue">Running</Tag>}
              extra={[
                shutDown ? (
                  <Button
                    key="4"
                    onClick={() => {
                      setShutdown(false);
                    }}
                  >
                    打开视频流
                  </Button>
                ) : (
                  <Button
                    key="3"
                    onClick={() => {
                      setShutdown(true);
                    }}
                  >
                    关闭视频流
                  </Button>
                ),
                <Button
                  key="2"
                  onClick={() => {
                    setTimeout(() => {
                      canRecognize
                        ? openNotification({
                            message: "验证成功",
                            description: "控制器执行操作",
                          })
                        : openNotification({
                            message: "验证失败",
                            description: "请在光照充足的地方试试",
                          });
                    }, 1234);
                  }}
                >
                  发送当前帧
                </Button>,
                <Button key="1" type="primary">
                  其他操作
                </Button>,
                <DropdownMenu key="more" />,
              ]}
              //   avatar={{
              //     src: "https://avatars1.githubusercontent.com/u/8186664?s=460&v=4",
              //   }}
            >
              <Contents
                extraContent={
                  isLoading ? (
                    <Card />
                  ) : shutDown ? null : (
                    <video
                      width="400px"
                      height="400px"
                      autoPlay
                      className="video-part"
                    >
                      <source src={src} type="video/mp4"></source>
                    </video>
                  )
                }
              >
                {content}
              </Contents>
            </PageHeader>
          </div>
        </Content>
        <Footer style={{textAlign: "center"}}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </div>
  );
}
