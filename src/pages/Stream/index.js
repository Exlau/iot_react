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
        src="https://gw.alipayobjects.com/zos/rmsportal/MjEImQtenlyueSmVEfUD.svg"
        text="Quick Start"
      />
      <IconLink
        src="https://gw.alipayobjects.com/zos/rmsportal/NbuDUAuBlIApFuDvWiND.svg"
        text=" Product Info"
      />
      <IconLink
        src="https://gw.alipayobjects.com/zos/rmsportal/ohOEPSYdDTNnyMbGuyLb.svg"
        text="Product Doc"
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
  //   const [shutDown, setShutdown] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 10000);
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
              subTitle="device4GF7FV"
              tags={<Tag color="blue">Running</Tag>}
              extra={[
                <Button key="3">关闭视频流</Button>,
                <Button key="2">发送当前帧</Button>,
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
                  ) : (
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
