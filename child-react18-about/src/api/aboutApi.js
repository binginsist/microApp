import http from "../utils/http";

// 关于我们接口
const getPlatformAboutUs = (params) => {
  return http
    .getJson("/api/index/getPlatformAboutUs", params)
    .then((res) => res.data);
};

/*eslint-disable */
export default {
  getPlatformAboutUs,
};
