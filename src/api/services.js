import axios from "axios";
import req from "./index";

export function get() {
  return axios.post({
    url: "192.168.31.135",
  });
}

export function getServiceList() {
  return req.get("/iot/get_service_list");
}

export function callService(method_name) {
  const url = `/iot/service?method_name=1`;
  return req({
    url,
    method: "POST",
  });
}
