import api from "../Configs/api";

const userservices = {
  registerUser: (userdata) => api.post("register/registeruser", userdata),
};

export default userservices;
