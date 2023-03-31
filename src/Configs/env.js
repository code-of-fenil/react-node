// import appRoot from "app-root-path";
// import dotenv from "dotenv";
// console.log("appRoot", appRoot.path);
// dotenv.config({ path: `../../.env` });
console.log("env", process.env.REACT_APP_BACKEND_URL);

const env = {
  ApiUrl: process.env.REACT_APP_BACKEND_URL,
};

export default env;
