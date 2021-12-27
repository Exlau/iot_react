import axios from "axios";
import req from "./index";

export function get(method_name) {
  return axios.post({
    url: "192.168.31.135",
  });
}

export function getServiceList() {
  return req.get("/iot/get_service_list");
}
