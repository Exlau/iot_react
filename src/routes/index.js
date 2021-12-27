import Home from "../components/Home";
import Service from "../components/Service";
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
    key: "equipRegist",
    component: (
      <div>
        <input />
      </div>
    ),
    path: "equipregist",
    link: "equipregist",
  },
];

export default routes;
