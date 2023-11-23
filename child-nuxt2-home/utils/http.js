import axios from "axios";

axios.defaults.baseURL =
  process.env.NODE_ENV === "production" ? "" : "http://localhost:3000";

const Net = {
  getJson(url, params) {
    return new Promise((resolve, reject) => {
      axios
        .get(url, params)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  postJson(url, params) {
    return new Promise((resolve, reject) => {
      axios
        .post(url, params)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};

export default Net;
