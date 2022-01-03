import req from "./index.js";
import {baseUrl} from "./config.js";
import axios from "axios";

export function doLogin({username, password}) {
  const url = "iot/home";
  return axios.post(
    `${baseUrl}${url}?username=${username}&password=${password}`
  );
}
