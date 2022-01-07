import {req} from "./index";

export function getAppkey(obj) {
  const url = "iot/get_appkey";
  return req.get(url);
}
