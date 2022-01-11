import React, {useState, useEffect, useMemo} from "react";
import {Table} from "antd";
import columns from "./data/columns";
import {processTableData} from "./data/processData";

import locStorage from "../../utils/localStorage";
import {getServiceList} from "../../api/services";
import ServiceModal from "./components/ServiceModal";

export default function Service(props) {
  const [tableData, setTableData] = useState(locStorage.get("serviceList"));
  const [visu, setVisu] = useState(false);
  const [modalCpn, setModalCpn] = useState(<></>);

  const visibleCb = (visu) => {
    setVisu(visu);
  };

  const processedData = useMemo(
    () =>
      processTableData(tableData, (cpn) => {
        setModalCpn(cpn);
        setVisu(true);
      }),
    [tableData]
  );

  useEffect(() => {
    // if (locStorage.getNewComing("serviceList") !== false) {
    getServiceList().then((res) => {
      // locStorage.set("serviceList", res.data.serv_list);
      setTableData(res.data.serv_list);
    });
    // }
  }, []);

  return (
    <div className="service-root">
      <ServiceModal visible={visu} visibleCb={visibleCb} Cpn={modalCpn} />
      <Table columns={columns()} dataSource={processedData} />
    </div>
  );
}
