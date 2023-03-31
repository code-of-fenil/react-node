import axios from "axios";
import env from "./env";
console.log("basseUrl", env.ApiUrl);
const axiosInstance = axios.create({
  baseURL: env.ApiUrl,
  timeout: 600000,
  headers: {
    "content-type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": "*",
  },
});

// axios.p
// const axiosInstance = "a;sdk";
export default axiosInstance;
