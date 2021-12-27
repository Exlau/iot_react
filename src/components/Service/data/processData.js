import {SERVICE_STATE} from "./consts";

export function processTableData(hashMap, cb) {
  // eslint-disable-next-line no-console
  console.log("cb:", cb);
  const tableData = Object.keys(hashMap).map((hash) => {
    // eslint-disable-next-line no-console
    console.log(hashMap[hash].slice(1, hashMap[hash].length));
    return {
      key: hash,
      "service-name": hashMap[hash][0],
      "params-list": hashMap[hash].slice(1, hashMap[hash].length),
      state: SERVICE_STATE.STABLE,
      action: {
        text: "Call",
        // eslint-disable-next-line no-console
        callBack: () => cb(<div>cpn!!@</div>),
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
      // eslint-disable-next-line no-console
      callBack: () => cb(<div>cpn!!22@</div>),
    },
  });

  return tableData;
}

const processModalData = (data) => {};
