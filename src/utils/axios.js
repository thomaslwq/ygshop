// 通用请求配置
import axios from "axios"
const instance = axios.create({
  baseURL: process.env.REACT_APP_URL
});
// Add a request interceptor
instance.interceptors.request.use(function (config) {
  // Do something before request is sent
  // 添加 oauth_token 到请求中
  let userInfo = JSON.parse(localStorage.getItem("userinfo")) || {};
  let oauth_token = userInfo.oauth_token;
  if(oauth_token&&config.data){ // 如果是 get 请求 没有data 参数
    config.data.oauth_token = oauth_token;
  }
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response.data;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});
export default instance;