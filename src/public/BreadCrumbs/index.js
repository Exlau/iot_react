import React from "react";
import {Breadcrumb} from "antd";
import {useLocation} from "react-router-dom";

export default function BreadCrumbs({style}) {
  const {pathname} = useLocation();
  const routines = pathname.split("/");
  return (
    <Breadcrumb style={style}>
      {routines.map((val, index) => {
        return <Breadcrumb.Item key={index}>{val}</Breadcrumb.Item>;
      })}
    </Breadcrumb>
  );
}
