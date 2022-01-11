import req from "./index";

export function getAppkey(obj) {
  const url = "iot/get_appkey";
  return req.get(url);
}

export function getDeviceList() {
  const url = "iot/get_device_list";
  return req.get(url);
}

export function regesterDevice(params) {
  const {appkey, user_name, device_name} = params;
  const url = `iot/device_register?appkey=${appkey}&user_name=${user_name}&device_name=${device_name}`;
  return req.post(url);
}

export function deviceLogout() {
  const url = "iot/device_logout?id=1";
  return req.post(url);
}

export function deviceOnline() {
  const url = "iot/online?id=1";
  return req.post(url);
}
