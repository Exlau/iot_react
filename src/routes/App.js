import React, {useEffect} from "react";
import {Link, Routes, Route} from "react-router-dom";
import {useDispatch} from "react-redux";
import equipmentConsts from "../components/Equipment/data/equipmentConsts";
import {Layout, Menu} from "antd";
import BreadCrumbs from "../../src/public/BreadCrumbs";
import {UserOutlined} from "@ant-design/icons";

import LogoutBtn from "../public/LogoutBtn";
import HeartBeat from "../public/HeartBeat";
import EquipSelect from "../public/EquipSelect";
import DeviceLogoutBtn from "../public/DeviceLogoutBtn";

import routes from "./index";

import {getDeviceList} from "../api/equipments";
import "./App.css";

const {Header, Content, Footer, Sider} = Layout;
const {SubMenu} = Menu;

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getDeviceList().then((res) => {
      const list = [];
      Object.keys(res.data.device_list).forEach((item) => {
        list.push(res.data.device_list[item]);
      });
      dispatch({
        type: equipmentConsts.SET_EQUIPLIST,
        payload: list,
      });
    });
  });
  const collapsed = false;
  return (
    <Layout style={{minHeight: "100vh"}}>
      <Sider collapsible collapsed={collapsed}>
        <div className="logo"></div>
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          {routes.map((item) => {
            return item.children ? (
              <SubMenu
                key={item.key}
                icon={<UserOutlined />}
                title={item.title}
              >
                {item.children.map((sub) => {
                  return (
                    <Menu.Item key={sub.key}>
                      <Link to={sub.link} key={sub.key}>
                        {sub.title}
                      </Link>
                    </Menu.Item>
                  );
                })}
              </SubMenu>
            ) : (
              <Menu.Item key={item.key}>
                <Link to={item.link} key={item.key}>
                  {item.title}
                </Link>
              </Menu.Item>
            );
          })}
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{padding: 0}}>
          <span className="header-content">
            <LogoutBtn />
            <DeviceLogoutBtn/>
            <HeartBeat />
            <EquipSelect />
          </span>
        </Header>
        <Content style={{margin: "0 16px", height: "80vh", overflowY: "auto"}}>
          <BreadCrumbs style={{margin: "16px 0"}} />
          {/* <Breadcrumb style={{margin: "16px 0"}}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb> */}
          <Routes>
            {routes.map((item) => {
              if (item.children && item.children.length !== 0) {
                return item.children.map((child) => {
                  return (
                    <Route
                      path={child.path}
                      element={child.component}
                      key={child.key}
                    />
                  );
                });
              }
              return (
                <Route
                  path={item.path}
                  element={item.component}
                  key={item.key}
                />
              );
            })}
          </Routes>
        </Content>
        <Footer style={{textAlign: "center"}}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default App;
