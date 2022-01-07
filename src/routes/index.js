import Home from "../components/Home";
import Service from "../components/Service";
import Equipment from "../components/Equipment";
import Profile from "../components/Profile";

const routes = [
  {
    title: "仪表盘",
    key: "dashboard",
    children: [
      {
        title: "HOME",
        key: "home",
        component: <Home />,
        path: "dashboard/home",
        link: "dashboard/home",
      },
    ],
  },
  {
    title: "服务列表",
    key: "serviceList",
    component: <Service />,
    path: "service",
    link: "service",
  },
  {
    title: "设备注册",
    key: "equipManage",
    component: <Equipment />,
    path: "equipment",
    link: "equipment",
  },
  {
    title: "个人中心",
    key: "profile",
    component: <Profile />,
    path: "profile",
    link: "profile",
  },
];

export default routes;
