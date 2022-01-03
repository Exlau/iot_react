import Home from "../components/Home";
import Service from "../components/Service";
import Equipment from "../components/Equipment";

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
    title: "设备管理",
    key: "equipManage",
    component: <Equipment />,
    path: "equipment",
    link: "equipment",
  },
];

export default routes;
