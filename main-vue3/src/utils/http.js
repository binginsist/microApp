import axios from "axios";

axios.defaults.baseURL = "";

const Net = {
  getJson: function (url, params) {
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
  postJson: function (url, params) {
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
