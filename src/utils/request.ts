import axios from "axios"
import Cookies from 'js-cookie'

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// baseURL: process.env.baseURL || process.env.apiUrl || ""
// timeout: 60 * 1000, // Timeout
// withCredentials: true, // Check cross-site Access-Control

const _axios = axios.create({
  baseURL: process.env.REACT_APP_API,
  timeout: 20000,
  headers: {},
});

// let loadingInstance = null;
_axios.interceptors.request.use(
  (config) => {
    if (Cookies.get('ACCESS_TOKEN')) config.headers['x-access-token'] = Cookies.get('ACCESS_TOKEN');
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
_axios.interceptors.response.use(
    (response) => {
      console.log('response', response)
      return response.data;
    },
    (error) => {
      console.log(error.message)
      // 401
      if (error.message.includes('status code 401')) {
        alert('登录状态异常,请重新登录')
      }
      // timeout
      if (error.message.includes('timeout')) {
        alert('请求超时')
      }
      // network error
      if (error.message.includes('Network Error')) {
        alert('网络错误')
      }
      return Promise.reject(error);
    }
);

export default _axios;
