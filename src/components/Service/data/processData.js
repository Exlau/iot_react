import {SERVICE_STATE} from "./consts";
import ModalForm from "../components/ModalCpn";

export function processTableData(hashMap, cb) {
  const tableData = Object.keys(hashMap).map((hash) => {
    const row = {
      key: hash,
      "service-name": hashMap[hash][0],
      "params-list": hashMap[hash].slice(1, hashMap[hash].length),
      state: SERVICE_STATE.STABLE,
    };

    return {
      ...row,
      action: {
        text: "Call",
        callBack: () => cb(<ModalForm row={row} />),
      },
    };
  });
  tableData.push({
    key: "hash",
    "service-name": "hashMap[hash][0]",
    "params-list": ["nn", "kk"],
    state: SERVICE_STATE.STABLE,
    action: {
      text: "Call",
      callBack: () => cb(<div>cpn!!22@</div>),
    },
  });

  return tableData;
}

const processModalData = (data) => {};
