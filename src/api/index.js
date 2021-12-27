import axios from "axios";
import auth from "../auth";
import {baseUrl, localUrl} from "./config";

let instance = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
});

instance.interceptors.request.use(
  (config) => {
    if (!auth()) {
      window.location.href = `${localUrl}login`;
      return Promise.reject("please login");
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default instance;
